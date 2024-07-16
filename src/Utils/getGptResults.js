import openai from "../Utils/openai";
const getGptResults = async (searchQuery) => {
  const gptQuery =
    "Act as a movie recommendation system and suggest some movies for the query" +
    searchQuery +
    ". Only give me names of 5 movies, comma separated like the exampple result given ahead. Example Result: Coco, elemental, Toy Story 3, Soul, Turning Red";
  const result = await openai.chat.completions.create({
    messages: [{ role: "system", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  return result;
};

export default getGptResults;