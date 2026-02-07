// In a real application, you would save this to a database or send an email.
// For this task, we log to console and simulate success.

exports.submitContactForm = (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // Simulate processing delay
    setTimeout(() => {
        res.status(200).json({ message: 'Message received successfully!', success: true });
    }, 1000);
};

exports.submitProjectEnquiry = (req, res) => {
    const { name, email, projectType, budget, description } = req.body;

    if (!name || !email || !projectType) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    console.log('--- NEW PROJECT ENQUIRY ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Type: ${projectType}`);
    console.log(`Budget: ${budget}`);
    console.log(`Desc: ${description}`);
    console.log('---------------------------');

    setTimeout(() => {
        res.status(200).json({ message: 'Enquiry received! We will contact you soon.', success: true });
    }, 1000);
};
