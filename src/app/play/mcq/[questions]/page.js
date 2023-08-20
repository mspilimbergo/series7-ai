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
  
  if (type === "mock-test")  {
    isMockTest = true;
  }
  
  if (isMockTest) {

      // 11 questions from Open Accounts After Obtaining....
      // 91 from Provides Customer with Informatin About Investments
      // 14 from Obtans and verifies custoomers' purchase and sales
      // 9 froom Seeks Business for the Brroker-Dealer
  
    const mockExamTopics = [
      { name: 'Equity Securities', limit: 1 },
      { name: 'Options', limit: 2 },
      { name: 'Mutual Funds and ETFs', limit: 3 },
      { name: 'Annuities and Retirement Plans', limit: 1 },
    ];

    const results = await Promise.all(
      mockExamTopics.map(async (topic) => {
        const { data, error } = await supabase
          .from('questions')
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

    // Flatten the results array to get a single list of questions
    const mockQuestions = results.flat();

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Shuffle the questions
    shuffleArray(mockQuestions);

    // console.log('Fetched and shuffled mock questions:', mockQuestions);
    
    return <MCQ game={mockQuestions} isMockTest={true}/>;
    // return <MCQ game={questionsData} isMockTest={isMockTest} />;
  }
  else {
    // console.log("============IN MCQ===============")

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
          .from('questions')
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