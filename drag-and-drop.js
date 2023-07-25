import { insertContactEmail } from 'public/contactInfo'

$w.onReady(function () {
    setupPostButton();
});

function setupPostButton() {
    $w('#successMsg').hide();
    $w('#submitBtn').onClick(() => {

        const newContactEmail = {
            email: $w('#emailAddress').value
        }

        $w('#emailAddress').value = '';

        insertContactEmail(newContactEmail)
            .then(() => {
                $w('#emailAddress').hide();
                $w('#submitBtn').hide();
                $w('#successMsg').show();
            });
    })
}