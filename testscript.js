document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const steps = document.getElementsByClassName("step");
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.querySelector('.bar');  // Changed from .progress-bar to .bar
    const form = document.getElementById('form-wrapper');
    
    let currentStep = 0;
    const totalSteps = steps.length - 2; // -2 to account for success div
    
    // Initialize first step
    showStep(currentStep);
    updateButtons();
    updateProgress();

    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            steps[currentStep].style.display = 'none';
            currentStep++;
            showStep(currentStep);
            updateButtons();
            updateProgress();
        }
    });

    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            steps[currentStep].style.display = 'none';
            currentStep--;
            showStep(currentStep);
            updateButtons();
            updateProgress();
        }
    });

    // Submit button click
    submitBtn.addEventListener('click', () => {
       preloader.style.display = 'block';
    // Hide all steps


        // Wait for Angular's registerUser to complete
        
		/*
		setTimeout(() => {
            // Hide current step
            steps[currentStep].style.display = 'none';
            
            // Hide navigation buttons
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'none';

            // Hide preloader
            preloader.style.display = 'none';
            
            // Show success message
            successDiv.style.display = 'block';

            // Update progress bar to 100%
            progressBar.style.width = '100%';
        }, 2000); // Matching the original 2-second delay
    
	*/
	
	});

    // Helper functions
    function showStep(stepNumber) {
        steps[stepNumber].style.display = 'block';
    }

    function updateButtons() {
        if (currentStep === 0) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
        else if (currentStep === totalSteps) {
            prevBtn.style.display = 'inline-block';
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        }
        else {
            prevBtn.style.display = 'inline-block';
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    function updateProgress() {
        const percent = ((currentStep + 1) / (totalSteps + 1)) * 100;
        progressBar.style.width = percent + '%';
    }
});