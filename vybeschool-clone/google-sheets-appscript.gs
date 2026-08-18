/**
 * The Coding Company — Become a member form → Google Sheets
 *
 * HOW TO DEPLOY (30 seconds):
 * 1. Open the spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1XkX0yfRa9NMZQWL-N6YUBhmIaN8w5g5gELMbV2HkU24/edit
 * 2. Extensions → Apps Script
 * 3. Delete the default Code.gs content and paste this entire file.
 * 4. Click Save (disk icon).
 * 5. Top right → Deploy → New deployment → ⚙️ Type: "Web app"
 *    - Description: anything
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy → Authorize access (sign in with the spreadsheet owner account)
 * 7. Copy the "/exec" URL shown.
 * 8. In this codebase, open:
 *    www.vybeschool.com/become-a-member/index.html
 *    and set the SHEETS_URL variable to that /exec URL.
 */

const SHEET_ID = '1XkX0yfRa9NMZQWL-N6YUBhmIaN8w5g5gELMbV2HkU24';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full name',
        'Work email',
        'Company',
        'Role',
        'Experience',
        'City',
        'LinkedIn / profile URL',
        'What do you want to build?'
      ]);
    }

    const body = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      body.name || '',
      body.email || '',
      body.company || '',
      body.role || '',
      body.experience || '',
      body.city || '',
      body.linkedin || '',
      body.mission || ''
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}