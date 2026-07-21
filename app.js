document.addEventListener('DOMContentLoaded', () => {
    // Phase Sections
    const phase1 = document.getElementById('phase1');
    const phase2 = document.getElementById('phase2');
    const phase3 = document.getElementById('phase3');

    // Progress Indicators
    const step1Ind = document.getElementById('step1Indicator');
    const step2Ind = document.getElementById('step2Indicator');
    const step3Ind = document.getElementById('step3Indicator');

    // Interactive Buttons
    const btnToPhase2 = document.getElementById('nextToPhase2');
    const btnToPhase3 = document.getElementById('nextToPhase3');
    const btnRestart = document.getElementById('restartBtn');

    // Input Form Fields
    const fName = document.getElementById('firstName');
    const mName = document.getElementById('middleName');
    const lName = document.getElementById('lastName');
    const extName = document.getElementById('extName');
    const ageInput = document.getElementById('age');
    const genderSel = document.getElementById('gender');
    const bdayInput = document.getElementById('birthday');
    const currAddr = document.getElementById('currentAddress');
    const permAddr = document.getElementById('permanentAddress');

    // Preview Layout Outputs
    const alertBox = document.getElementById('validationAlert');
    const previewName = document.getElementById('previewName');
    const previewDemo = document.getElementById('previewDemographics');
    const previewCurr = document.getElementById('previewCurrent');
    const previewPerm = document.getElementById('previewPermanent');

    // Helper: Display validation warnings
    function showAlert(message) {
        alertBox.textContent = message;
        alertBox.classList.remove('d-none');
    }

    // Helper: Reset error indicators
    function clearAlert() {
        alertBox.textContent = '';
        alertBox.classList.add('d-none');
    }

    // Phase 1 to Phase 2 Form Transition & Validation
    btnToPhase2.addEventListener('click', () => {
        clearAlert();

        // Target validation condition for age restriction
        const ageValue = parseInt(ageInput.value, 10);

        if (!fName.value.trim() || !lName.value.trim()) {
            showAlert('Error: First Name and Last Name are required structural inputs.');
            return;
        }
        if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
            showAlert('Error: Employee must be a legal adult between 18 and 100 years old.');
            return;
        }
        if (!genderSel.value || !bdayInput.value) {
            showAlert('Error: Complete the remaining gender identity and birthdate options.');
            return;
        }

        // Advance interface panels
        phase1.classList.add('d-none');
        phase2.classList.remove('d-none');

        // Update layout navigation indicators
        step1Ind.className = 'text-muted pb-1 flex-fill';
        step2Ind.className = 'text-primary border-bottom border-3 border-primary pb-1 flex-fill';
    });

    // Phase 2 to Phase 3 Final Generation
    btnToPhase3.addEventListener('click', () => {
        clearAlert();

        if (!currAddr.value.trim() || !permAddr.value.trim()) {
            showAlert('Error: Complete current and permanent global residential data points.');
            return;
        }

        // Format and process name attributes strings
        const middleInitial = mName.value.trim() ? ` ${mName.value.trim().charAt(0).toUpperCase()}.` : '';
        const suffix = extName.value.trim() ? `, ${extName.value.trim()}` : '';
        const fullCorporateName = `${lName.value.trim()}, ${fName.value.trim()}${middleInitial}${suffix}`;

        // Inject structured outputs into summary view DOM properties
        previewName.textContent = ` ${fullCorporateName}`;
        previewDemo.textContent = ` Age: ${ageInput.value} | Gender: ${genderSel.value} | DOB: ${bdayInput.value}`;
        previewCurr.textContent = currAddr.value.trim();
        previewPerm.textContent = permAddr.value.trim();

        // Advance interface panels
        phase2.classList.add('d-none');
        phase3.classList.remove('d-none');

        // Update layout navigation indicators
        step2Ind.className = 'text-muted pb-1 flex-fill';
        step3Ind.className = 'text-success border-bottom border-3 border-success pb-1 flex-fill';
    });

    // Reset Form Processing Workflow
    btnRestart.addEventListener('click', () => {
        // Clear value profiles inside native structures
        fName.value = '';
        mName.value = '';
        lName.value = '';
        extName.value = '';
        ageInput.value = '';
        genderSel.value = '';
        bdayInput.value = '';
        currAddr.value = '';
        permAddr.value = '';

        clearAlert();

        // Restore layout dashboard properties
        phase3.classList.add('d-none');
        phase1.classList.remove('d-none');

        step3Ind.className = 'text-muted pb-1 flex-fill';
        step1Ind.className = 'text-primary border-bottom border-3 border-primary pb-1 flex-fill';
    });
});
