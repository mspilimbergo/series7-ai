import MCQ from "@/components/MCQ";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";


const MCQPage = async ({ params: {questions}, searchParams: {topics, type} }) => {
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();
  // const searchParamsString = searchParams.get('topics');
  // console.log("TOPICS", topics);
  // const examType = searchParams.get('type');
  // console.log("EXAM TYPE", type);
  // console.log("SEARCH PARAMS", searchParams);
  // console.log("PARAMS", params);
  // console.log("QUESTIONS PARAMS", isMockTest, numberOfQuestions, topicsSelected);        
  if (!session) {
    return redirect("/");
  }
  

  let isMockTest = false;
  
  if (questions === "mock-test")  {
    isMockTest = true;
  }
  
  if (isMockTest) {
    console.log("============IN MOCK TEST===============")

      // 11 questions from Open Accounts After Obtaining....
      // 91 from Provides Customer with Informatin About Investments
      // 14 from Obtans and verifies custoomers' purchase and sales
      // 9 froom Seeks Business for the Brroker-Dealer

    // In our database, we have a table named topics that contain all of the topics and their associated functions. 
    // There are four functions: 
    // 1. Open Accounts After Obtaining and Evaluating Customers' Financial Profile and Investment Objectives
    // 2. Provides Customers with Information About Investments
    // 3. Obtains and Verifies Customers' Purchase and Sales Instructions
    // 4. Seeks Business for the Broker-Dealer from Customers and Potential Customers
    
    // We neeed to fetch a certain number of questions from each topic.
    // The question per function are the following: 
    // 11 from Open Accounts After Obtaining and Evaluating Customers' Financial Profile and Investment Objectives
    // 91 from Provides Customers with Information About Investments
    // 14 from Obtains and Verifies Customers' Purchase and Sales Instructions
    // 9 from Seeks Business for the Broker-Dealer from Customers and Potential Customers
    // We need to fetch 125 questions total.

    // Write a function that fetches the questions from each topic and returns an array of question ensuring that the number of questions fetched from each topic is equal to the number of questions per function.
    
    // First get all of the topics and their associated functions
    // The supabase table has a column with the name of "name" and a column with the name of "function"
    // We need to fetch all of the topics and their associated functions
    // Define the functions and their associated topics and question limits
const functions = [
  {
    name: 'Open Accounts After Obtaining and Evaluating Customers\' Financial Profiles and Investment Objectives: Retirement Plans',
    topics: 2,
    limit: 11
  },
  {
    name: 'Provide Customers with Information About Investments, Makes Suitable Recommendations, Transfers Assets, and Maintains Appropriate Records',
    topics: 11,
    limit: 91
  },
  {
    name: 'Obtains and Verifies Customers\' Purchases and Sales Instructions and Agreements; Processes, Completes, and Confirms Transactions',
    topics: 3,
    limit: 14
  },
  {
    name: 'Seeks Business for the Broker-Dealer from Customers and Potential Customers',
    topics: 2,
    limit: 9
  },
];

// console.log(functions[1].name)

// Fetch the topics and their associated functions
const { data: topicsData, error: topicsError } = await supabase
  .from('topics')
  .select('*')
  .in('function', functions.map(f => f.name));

  // console.log("TOPICS DATA", topicsData.length)

if (topicsError) {
  console.error('Error fetching topics:', topicsError);
  return [];
}

  // Initialize an array to store all questions
  let allQuestionsForFunction = [];
  
// Fetch the questions for each function
const questions = await Promise.all(functions.map(async (func) => {
  // Calculate the limit per topic
  const limitPerTopic = Math.floor(func.limit / func.topics);

  // Get the topics for this function
  const topicsForFunction = topicsData.filter(topic => topic.function === func.name);

  // console.log("TOPICS FOR FUNCTION", topicsForFunction.length)

  // Fetch the questions for each topic
  const questionsForFunction = await Promise.all(
    topicsForFunction.map(async (topic) => {
    const { data: questionsData, error: questionsError } = await supabase
      .from('questions_versioned')
      .select('*')
      .eq('topic', topic.name)
      .limit(limitPerTopic);
      
      console.log("QUESTIOSN for function", questionsData.length)      

    if (questionsError) {
      console.error('Error fetching questions:', questionsError);
      return [];
    }
    // Append the questions to the allQuestionsForFunction array
    allQuestionsForFunction.push(...questionsData);

    return questionsData;
  }));
}));

const mockQuestions = questions.flat();

// console.log("QUESTIONS FOR FUNCTION", mockQuestions.length)
// console.log("ALL QUESTIONS FOR FUNCTION", allQuestionsForFunction.length)

// Flatten the questions array to get a single list of questions
// return questionsForFunction.flat();


// console.log("questions fetched", questions.length)
// return (
//   <div>
//     {questions.length}
//   </div>
// )

// Flatten the questions array to get a single list of questions
// const allQuestions = questions.flat();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the questions
shuffleArray(allQuestionsForFunction);

return <MCQ game={allQuestionsForFunction} isMockTest={true}/>;

    
    // const functions = [
    //   'Open Accounts After Obtaining and Evaluating Customers Financial Profile and Investment Objectives',
    //   'Provides Customers with Information About Investments',
    //   'Obtains and Verifies Customers Purchase and Sales Instructions',
    //   'Seeks Business for the Broker-Dealer from Customers and Potential Customers',
    // ];
    
    // const { data: topicsData, error: topicsError } = await supabase
    //   .from('topics')
    //   .select('*')
    //   .in('function', functions);

    
  
    // const mockExamTopics = [
    //   { name: 'Equity Securities', limit: 1 },
    //   { name: 'Options', limit: 2 },
    //   { name: 'Mutual Funds and ETFs', limit: 3 },
    //   { name: 'Annuities and Retirement Plans', limit: 1 },
    // ];

    // const results = await Promise.all(
    //   mockExamTopics.map(async (topic) => {
    //     const { data, error } = await supabase
    //       .from('questions_versioned')
    //       .select('*')
    //       .eq('topic', topic.name)
    //       .limit(topic.limit);
        
    //     if (error) {
    //       console.error('Error fetching questions:', error);
    //       return [];
    //     }        
    //     return data;
    //   })
    // );

    // // Flatten the results array to get a single list of questions
    // const mockQuestions = results.flat();

    // function shuffleArray(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    // }

    // // Shuffle the questions
    // shuffleArray(mockQuestions);

    // // console.log('Fetched and shuffled mock questions:', mockQuestions);
    
    // return <MCQ game={mockQuestions} isMockTest={true}/>;
    // return <MCQ game={questionsData} isMockTest={isMockTest} />;
  }
  else {
    // console.log("============IN MCQ===============")
    console.log("============IN TUTOR MODE===============")

    // Turn the topics into an array
    const topicsArray = topics.split(',');
    // console.log("TOPICS ARRAY LENGTH: ", topicsArray.length)

    let topicsWithLimits = [];

    // Calculation that determines how many questions to fetch from each topic    
    const topicsSelected = topicsArray.length;
    // Type cast the line below so that the result is a whole number
    const questionsPerTopic = Math.floor(questions / topicsSelected);

    // If the number of topics is greater than the number of questions,
    // then randomly select the number of topics equal to the number of questions
    if (topicsSelected > questions) {
      const randomTopics = [];
      while (randomTopics.length < questions) {
        const randomTopic = Math.floor(Math.random() * topicsSelected);
        if (!randomTopics.includes(randomTopic)) {
          randomTopics.push(randomTopic);
        }
      }
      topicsWithLimits = randomTopics.map((topic) => {
        return { name: topicsArray[topic], limit: 1 };
      });
    }

    if (questions >= topicsSelected) {
    // If the number of questions is not evenly divisible by the number of topics, 
    // then randomly select one of the topics and add one to the number of questions
    // to fetch from that topic
    // Keep a count of how many questions have been fetched from each topic to ensure that the length of topicsWithLimits is equal to the number of questions}
      if ((questions % topicsSelected) !== 0) {
        let questionsFetched = 0;
        while (questionsFetched < questions) {
          const randomTopic = Math.floor(Math.random() * topicsSelected);
          if (topicsWithLimits[randomTopic]) {
            topicsWithLimits[randomTopic].limit += 1;
          } else {
            topicsWithLimits[randomTopic] = { name: topicsArray[randomTopic], limit: 1 };
          }
          questionsFetched += 1;
        }
      } else {
        topicsWithLimits = topicsArray.map((topic) => {
          return { name: topic, limit: questionsPerTopic };
        });
      }

    
    
  }

  // console.log("TOPICS WITH LIMITS: ", topicsWithLimits)

  // return <div></div>


    const results = await Promise.all(
      topicsWithLimits.map(async (topic) => {
        const { data, error } = await supabase
          .from('questions_versioned')
          .select('*')
          .eq('topic', topic.name)
          .limit(topic.limit);
        
        if (error) {
          console.error('Error fetching questions:', error);
          return [];
        }        
        return data;
      })
    );

    console.log(results)

    // Flatten the results array to get a single list of questions
    const tutorQuestions = results.flat();

    // console.log("TUTOR QUESTIONS: ", tutorQuestions)

    // return <div>{topicsWithLimits.length}</div>

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Shuffle the questions
    shuffleArray(tutorQuestions);

    return <MCQ game={tutorQuestions} isMockTest={false} />;
  }
};

export default MCQPage;