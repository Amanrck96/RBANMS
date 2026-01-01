import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_TO_DOWNLOAD = [
    { url: 'https://rbanmsfgc.ac.in/images/logo_1.png', filename: 'logo.png' },
    { url: 'https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg', filename: 'principal-whatsapp.jpeg' },
    { url: 'https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg', filename: 'director-sahana.jpeg' },
    { url: 'https://rbanmsfgc.ac.in/images/director.jpg', filename: 'director-thumb.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/principal.jpg', filename: 'principal-thumb.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/campus1.jpg', filename: 'campus1.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/campus2.jpg', filename: 'campus2.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/campus3.jpg', filename: 'campus3.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/event1.jpg', filename: 'event1.jpg' },
    { url: 'https://rbanmsfgc.ac.in/images/highlight1.jpg', filename: 'highlight1.jpg' }
];

const TARGET_DIR = path.resolve(__dirname, '../public/images/migrated');

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

async function downloadFile(url, filename) {
    const filePath = path.join(TARGET_DIR, filename);
    const file = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            reject(err);
        });
    });
}

async function main() {
    console.log(`Downloading ${ASSETS_TO_DOWNLOAD.length} assets to ${TARGET_DIR}...`);
    for (const asset of ASSETS_TO_DOWNLOAD) {
        try {
            await downloadFile(asset.url, asset.filename);
        } catch (error) {
            console.error(`Error downloading ${asset.filename}:`, error.message);
        }
    }
    console.log('Download complete.');
}

main();
