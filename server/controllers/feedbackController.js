const Feedback = require('../models/feedback'); // Assuming the Feedback model is in the models folder


exports.createFeedback = async (req, res) => {
    try {
        // Destructure the fields from the request body
        const { name, locality, noStreetLightning, solitary, noPoliceSurvey, roadsNotGood, measures, landmark } = req.body;

        // Log the request data
        console.log('Received data:', { name, locality, noStreetLightning, solitary, noPoliceSurvey, roadsNotGood, measures, landmark });

        // Check if required fields are present
        if (!name || !locality || !measures || !landmark || 
            noStreetLightning === undefined || solitary === undefined || 
            noPoliceSurvey === undefined || roadsNotGood === undefined) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create and save the feedback in the database
        const newFeedback = new Feedback({
            name,
            locality,
            noStreetLightning,
            solitary,
            noPoliceSurvey,
            roadsNotGood,
            measures,
            landmark
        });

        await newFeedback.save();

        // Return the created feedback
        return res.status(201).json({
            success: true,
            message: "Feedback created successfully",
            feedback: newFeedback
        });

    } catch (err) {
        console.error("Error creating feedback:", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
