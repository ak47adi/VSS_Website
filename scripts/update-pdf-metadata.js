import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function main() {
    const inPath = path.resolve(process.cwd(), 'public', 'Final Electoral Roll 2025-2027.pdf');
    const outPath = path.resolve(process.cwd(), 'public', 'DUTA_Voter_List_2025-27.pdf');

    if (!existsSync(inPath)) {
        console.error(`Input PDF not found at: ${inPath}`);
        process.exit(1);
    }

    const bytes = readFileSync(inPath);
    const pdf = await PDFDocument.load(bytes);

    // Update metadata
    pdf.setTitle('DUTA Voter List 2025-27');
    pdf.setAuthor('Vishwavidyalaya Shikshak Samiti (VSS)');
    pdf.setSubject('DUTA Electoral Roll 2025-2027');
    pdf.setProducer('VSS Website');
    pdf.setCreator('VSS Website');
    pdf.setKeywords(['DUTA', 'Voter List', 'Electoral Roll', '2025-2027']);
    pdf.setCreationDate(new Date());
    pdf.setModificationDate(new Date());

    const newBytes = await pdf.save();
    writeFileSync(outPath, newBytes);
    console.log(`Updated PDF written to: ${outPath}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
