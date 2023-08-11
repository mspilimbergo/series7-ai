// Write a next.js 13 api route that fetches the tutor questions from supabase and returns them. 
// The request body will include a list of one or more topics and a number of questions.
// The route should be at /api/tutor-questions
// The supabase table name is questions
// The supabase table columns are id, question, answer, options, and topic
// Get the number of questions pertaining to the topic from the request body
// Sort the questions by topic

export async function POST(req, res) {
    // Get the request body parameters
    const { topics, numQuestions } = req.body;

    // Get the questions from supabase
    const { data: questions, error } = await supabase
        .from("questions")
        .select("*")


    
}
