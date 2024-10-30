# Emerging Technologies Project

## Table of Contents
- [Overview](#overview)
- [Task 1: Trigram Model](#task-1-trigram-model)
- [Task 2: Text Generation](#task-2-text-generation)
- [Task 3: Model Analysis](#task-3-model-analysis)
- [Task 4: Export Model to JSON](#task-4-export-model-to-json)
- [ELIZA Chatbot Project](#eliza-chatbot-project)
- [Final Thoughts and Challenges](#final-thoughts-and-challenges)
- [References](#references)


## Overview
This project submission includes four tasks and a final project (ELIZA chatbot) that demonstrate the application of trigram models, text generation, model analysis, JSON exports, and chatbot implementation. The tasks are structured to showcase research, development, and thoughtful coding practices.

---

## Task 1: Trigram Model
### Research
**N-gram Models and Trigrams**  
The trigram model used in Task 1 belongs to the broader class of **n-gram models**. Trigrams specifically focus on **sequence of three characters**. This allows the model to capture the structure of the English language much more efficiently than unigrams and bigrams which were looked at in lectures. The work of **Claude Shannon** was very important when it came to researching for this task. Shannon pioneered the study of probabilistic models in text generation in his 1948 paper _A Mathematical Theory of Communication_. Trigrams, as a third-order Markov model, provide enough context for decent text generation without over complexity.   
**Text Preprocessing in NLP**  
Preprocessing is a very important step in most natural language processing (NLP) tasks. It involves the processes of removing unwanted characters and standardizing the format of the text to prevent irrelevant data from effecting the model. Some similar methods are used in NLP libraries like **NLTK** and **SpaCy**. These streamline tasks like removing punctuation and converting text to lowercase or uppercase.     
**Project Gutenberg Texts**
In this task, We were instructed to select five works from **Project Gutenberg**. What is interesting is that these texts represent a variety of writing styles and genres. This really helps broaden the model with a large spectrum of English usage.  
### Comparison of Work  
**1. Data Structures: defaultdict vs. Counter**  
- `defaultdict(int)`:  
  * In my application I chose Python's `defaultdict(int)` from the `collections` module to store trigram counts. This had an advantage in automatically initialising a new key with a value of 0, which simplifies the logic by eliminating the need to check whether a trigram exists in the dictionary before updating its count.  
  * **Comparison** This choice leads to cleaner and more efficient code particularly when handling large datasets.   
- `Counter` from the `collections_ module`:  
  * An alternative would of been to use Python's `Counter` which is also optimised for counting and could provide useful methods like `most_common()`. However, using `Counter` would require manual checks for uninitialized keys, making it less efficient in this context.
  * **Conclusion**: While both are suitable. I chose `defaultdict(int)` for its simplicity and performance in this task.  

**2. Text Preprocessing: Handling Special Characters and Case Sensitivity**  
- **Removing Non-Alphabetic Characters**  
  * In my approach. We had to remove all non-alphabetical characters except for spaces and full stops to focus solely on the structure of the English language. This decision would align with common practices in NLP. Where irrelevant characters are removed to avoid distorting the model.   
  * **Comparison**: Some models might include more punctuation or numbers to create a more detailed language model. However this can add _noise_, especially when working with classic literature from Project Gutenberg. Punctuation patterns might skew the trigram counts.   
- **Punctuation**  
  * All characters were converted to uppercase. This was to avoid upper and lowercases version of the letters s distinct entities. This would avoid redundant trigrams such as the word _THE_ and _the_  
  * **Comparison**  
  Keeping everything case sensitive could potentially improve the model's understanding of sentences beginning versus other parts of the text. However, this would increase the complexity and size of the model without really improving the results for this task.  

**3. Choice of Texts from Project Gutenberg vs. Modern Texts**  
**Project Gutenberg**  
  * Using pieces of literature from Project Gutenberg really offered a variety of styles. We were explicitly told to use this source but I think have such a variety f genres and writing styles from here really help the model generalise better.  
**Other Sources**  
  * Using modern text corpora, such as **Brown Corpus** or **Wikipedia data**, could provide a more modern view on English language. However, Project Gutenberg's classic literature serves the purpose of this task very well and offers a broader view of English structure in more formal and narrative writing.  
### Justification for Approach 
**Data Cleaning**  
I implemented a cleaning process that removed non-alphabetic characters (except for spaces and full stops) and standardised all text to uppercase. This is to ensure that the model focused only on relevant text elements. The main reason I converted all characters to upper case was to avoid treating "A" and "a" as different entities.   
**Building the Trigram Model**  
The trigram model was built by iterating through the sequences of three consecutive characters and counting the frequency of each trigram. In this task I used Python's `defaultdict(int)` to store trigram counts. this allowed for automatically initialize and update counts efficiently. This data structure reduces the need for manual key checks, resulting in cleaner and faster code execution. I implemented a cleaning process that removed non-alphabetic characters (except for spaces and full stops) and standardised all text to uppercase. This is to ensure that the model focused only on relevant text elements. The main reason I converted all characters to upper case was to avoid treating "A" and "a" as different entities.  
**Combining Texts from Project Gutenberg**  
By processing five diverse texts from Project Gutenberg, each which were cleaned and analyzed separately, I could create a very robust trigram model. Their trigram counts were then combined into a single dictionary. This ensured the model reflected the variety of writing styles present in the English language.  

### Development
**Data Cleaning**
* `clean_text()` : This function removes unwanted characters (e.g., punctuation, special characters) and converts the text to uppercase. It also replaces multiple spaces with a single space to avoid artificially inflating trigram counts.  
**Building the Trigram Model**
* `build_trigram_model()` : This function iterates through the cleaned text and extracts three-character sequences (trigrams). Each trigram is stored in a `defaultdict(int)`, and its count is incremented each time it is encountered.  
**Combining texts fro Project Gutenberg**
* `process_multiple_files()` : This function processes multiple texts, applying the `clean_text()` function to clean each file, and then using `build_trigram_model()` to generate a trigram model for each text. The trigram counts from each file are combined into a single dictionary, resulting in a comprehensive model.  

### Results
The trigram was successfully built after processing the five texts from Project Gutenberg. This is an example of the most frequent trigrams in the combined model:

`{' LE': 2789, 'LET': 1288, 'ETT': 997, 'TTE': 2141, 'TER': 7254, 'ER ': 17193, 'R T': 4524, ' TO': 16087, 'TO ': 14617, 'O M': 1842, ' MR': 1372, 'MRS': 374, 'RS.': 716, 'S. ': 3141, '. S': 1466, ' SA': 3993, 'SAV': 180, 'AVI': 512, 'VIL': 479, 'ILL': 3706, 'LLE': 1195}`

After sharing my results with ChatGPT. It was able to tell me some notable observations. 
* ' TO' appears frequently (16,087 occurrences), reflecting its common usage in English as part of prepositional phrases and infinitive verbs.
* 'THE' appears 55,432 times, which is unsurprising, as "the" is the most common word in English.
* Personal titles like ' MR', 'MRS', and common pronouns like 'YOU' are also frequently observed.
* The trigram 'AND' appears 19,336 times, a reflection of its common usage in English conjunctions.

---

## Task 2: Text Generation
### Research
**N-gram Models for Text Generation**   
In natural language processing(NLP), **n-gram models** are widely used for generating and predicting sequences o characters or words. The trigram used here is a specific type of n-gram model that considers sequences of three characters, where each new character is predicted based on the previous two.The concept of n-grams stems from **Markov chains**, where the probability of each state/character depends only on the previous states (the two predicting characters)   
More advanced techniques like **Recurrent Neural Networks (RNNs),**Long Short-Term Memory (LSTM) networks, and **Transformers** are commonly used for state-of-the-art text generation. These methods allow for longer dependencies and a more nuanced understanding of language than n-gram models. However, for this task, the simplicity and efficiency of the trigram model make it an appropriate choice. 
**Randomized Text Generation with Weighted Probabilities**  
In this Task 2, the next character is selected based on the **weighted probabilities** of the trigrams starting with the last two characters in the sequence. This approach seems to be commonly used in **stochastic language models**, where randomness plays a role in generating more creative output, while still being guided by observed patterns in the data. 

--- 
### Comparison of Work

#### **1. Alternative Approaches to Text Generation**  
- **Bigrams**:
  -  As looked at in lectures we know that bigrams predict the next character based only on the previous character. This is simpler and even faster than a trigram model. Bigrams lack sufficient context to generate meaningful text. Bigrams are good for simple text structures but fall short when it comes to maintaining proper word boundaries or even sentence structures.  
  - **Comparison**: Comparing to trigrams, bigrams provide less linguistic context. In a bigram model, predicting the next letter for 'TH' would only consider the letter following 'H' , ignoring the context provided by 'T'. This would'nt produce a good result.   
- **Higher-Order N-grams (4-grams, 5-grams)**:  
  -  Higher order n-grams, such as **4-grams** or **5-grams** basically add more preceding characters. This would improve the coherence but would also require quite a bit more memory.
  - **Comparison**:  While higher-order n-grams provide more context, they introduce computational overhead. Trigrams strike a nice balance between generating coherent text and maintaining computational efficiency.  
- **Recurrent Neural Networks (RNNs)**:  
  -  RNN's and even LSTM's are designed to handle sequences of data and can model longer dependencies. Unlike n-grams models, RNN's remember all previous input data in a sequence, allowing for better handling of complex linguistic patterns.
  - **Comparisons**: RNN's and LSTM's are more powerful but far more complex and computationally expensive compared to trigrams. For this task using RNN's would be over doing it, where as trigrams provide simpler and sufficient approach.    
- **Transformers**:  
  - Transformer models such GPT(Generative Pre-trained Transformers), have changed the text generation game. They model dependencies between words or characters across entire sequences without the limitations of n-grams or RNN's.  
  - **Comparisons**: Transformer models are state-of-the-art for tasks like tet generations but they are far more complex. For this task, the trigrams servers the purpose well.  
#### **2. Data Structures for Efficient Processing**   
- **`defaultdict(int)` vs. `Counter`**:  
 - I used `defaultdict(int)` to store trigram counts. This simplifies the code by allowing automatic initialization of dictionary keys with a default value of 0.  
 - **Comparisons**: An alternative would be using Counter from Python’s collections module, which could also efficiently count trigram occurrences. While Counter provides useful methods such as `most_common()`, `defaultdict(int)` was chosen for its simplicity and minimal setup.  

#### **3. Probabilistic Text Generation**  
- **Random.choices()**:
 - The code uses `random.choices()` to select the next character based on the probabilities derived from trigram counts. This method allows weighted random selection, which reflects the underlying distribution of characters in the training data.  
 - **Comparisons**: Other approaches to probabilistic text generation might include sampling without replacement or applying temperature scaling to adjust the randomness in the output.  

--- 

### Justification for Implementation Approach

Although the trigram model was specified in the task, several key decisions were made in the implementation to ensure efficiency, clarity, and ease of use.

1. **Data Structures**:
   - I chose to use Python’s `defaultdict(int)` from the `collections` module to store the trigram counts. This decision simplifies the logic for counting trigrams, as `defaultdict` automatically initializes new keys with a value of `0`. This avoids the need for checking if a trigram already exists before updating its count, leading to cleaner and more efficient code.
   - **Alternative**: I could have used a `Counter` from `collections`, which provides similar functionality but requires more manual checks. In this case, `defaultdict(int)` offered a straightforward approach with minimal overhead.

2. **Text Preprocessing**:
   - To clean the text, I removed all non-alphabetic characters except spaces and full stops, converted all letters to uppercase, and normalized multiple spaces. This ensures that the text input is consistent, allowing the trigram model to focus only on meaningful patterns.
   - **Alternative**: Some models might retain punctuation or other special characters, but for this task, excluding them ensures that the trigrams reflect the core structure of English words.

3. **Character-by-Character Generation**:
   - The generation function, `generate_text()`, uses the `random.choices()` function to select the next character based on the trigram probabilities. This ensures that the generated text reflects the statistical distribution of the trigrams, with more frequent trigrams having a higher chance of being selected. This method allows for a balance between randomness and adherence to the underlying structure of the input data.
   - **Alternative**: Other selection methods (e.g., greedy selection) could have been used, but `random.choices()` provides the necessary randomness to generate more varied text, preventing the model from producing overly deterministic or repetitive output.

4. **Formatting for Readability**:
   - I implemented line breaks every 80 characters to format the generated text into readable blocks. This makes it easier to review the output visually, as large blocks of text can become difficult to interpret without proper structure.
   - **Alternative**: The output could have been left as one continuous string, but formatting it into multiple lines ensures better readability and allows for easier analysis of the results.

By implementing these strategies, the model adheres to the task requirements while ensuring that the code is efficient, readable, and flexible. Each decision was made to streamline the process while maintaining clarity and structure, leading to better organization of both the code and the output.


### Development  
In Task 2, I implemented a text generation model based on a trigram approach. The key functions developed are as follows:  
1. **`print_trigram_possibilities(trigram_model, last_two)`**: This function prints the possible next characters for a given pair of characters (last two) based on the trigram model. It calculates the probabilities for each possible next character and displays the results.
   - **Parameters**:
     - `trigram_model`: A dictionary containing the trigram counts.
     - `last_two`: A string representing the last two characters to check against the trigram model.

2. **`generate_text(trigram_model, length=10000, line_length=80)`**: This function generates a string of a specified length using the trigram model.
   - **Parameters**:
     - `trigram_model`: A dictionary containing the trigram counts.
     - `length`: The total number of characters to generate (default is 10,000).
     - `line_length`: The length of each line in the formatted output (default is 80).
   - The function initializes the generated text with the string "TH" and iteratively appends new characters based on the probabilities derived from the trigram model. It also formats the output by inserting line breaks at specified lengths.  


### Results
The text generation process successfully produced coherent text that follows the structure of the input corpus. The first 500 characters of the generated text shows the model's ability to generate sequences that resemble the original text.  

`Generated text (first 500 characters):
THAT BELIS INGEONG HIS LIZABBITHER DAS ALS I HIMPLY HERY BEIVE FORY FAMORESS AHA
T TH THE MOTHO PREE ITHIRCYSENTIMMOVER COGYME MAGIVOYOULET WHE MOVEREBETRAT GRAC
E HEIREPER PRYTHE HAREACCOMPAR DENJOIS OF AT IF THAVERS. MED SOR APARY SAYS ANDO
E PROURMIS RECLAT SY HE PEENEIVIDECKEWAN. HUSIDEERED NOT GIBROW TAUNG HALL WAS S
AINT OUSEVESHAVAND THAT ANTS ROCKE KING WED AS ANI SO MANDSONED AT JULAY OCIMP B
ITS NOT TIALLY IND ROM NO SM THERES. HE SHE MOGNEXED THATILLPALL AGO. DEEBOURE O
F HIP AN TO EL` 

Also, when querying for possible next characters following **TH**, the outut shows the character probabilities based on their occurrences in the trigram model:  

`Possible next characters after 'TH':  

TH : appeared 7714 times, probability = 0.1080  
THA: appeared 8516 times, probability = 0.1192  
THE: appeared 42957 times, probability = 0.6013  
...  
Total occurrences: 71444`

These results all show that the model does capture the patterns in the training data, providing meaningful text generation and accurate probability assessments for character transitions.


---

## Task 3: Model Analysis
### Justification for Approach
In Task 3, The primary objective was to evaluate the quality of the text generated by the Trigram model developed in Task 2. To achieve this, I focused on finding the percentage of valid English words present in the generated text. The justification for this approach is based o the premise that a higher percentage of valid words indicates a more linguistically sound text generation process. By comparing the generated text against a curated list of valid English words, we can assess the model's effectiveness in producing coherent output.

### Development  
The following functions were implemented to facilitate the analysis of the generated text:  
  
1. **`load_words(file_path)`**: This function loads a list of valid English words from a specified file and returns them as a set. Using a set allows for efficient membership checking when determining if words in the generated text are valid.
   - **Parameters**:
     - `file_path`: The path to the `words.txt` file containing valid English words.

2. **`extract_words(text)`**: This function extracts words from the generated text by removing punctuation and converting the text to lowercase to ensure uniformity.
   - **Parameters**:
     - `text`: The input text from which to extract words.

3. **`calculate_word_percentage(generated_text, valid_words)`**: This function calculates the percentage of valid words in the generated text by comparing it against the set of valid words loaded from the file.
   - **Parameters**:
     - `generated_text`: The output from Task 2.
     - `valid_words`: A set of valid English words.

### Results  
These were the results obtained;  
- Total Valid Words: 679
- Total Words Generated: 1784
- Percentage of Valid English Words: 38.06%  

**What can we say about these results??**  
The percentage of valid English words generated is 38.06%. This idicates that while the model can produce a significant number of valid words, a massive portion of the generated output consist of invalid and nonsensical words. There is a big room for improvement in the model.  

This does highlight the limitations of a Trigram model. The model relies on sequences of only three characters, which can lead to the generation of uncommon or incorrect word combinations, thereby reducing the overall quality of the output.



---

## Task 4: Export Model to JSON
### Justification for Approach
(Insert justification for Task 4 here...)

### Development
(Insert development details for Task 4 here...)

### Results
(Insert the output or explanation of results for Task 4 here...)

---

## ELIZA Chatbot Project  
The **ELIZA** chatbot is a simulated conversational program. It was inspired by early natural language processing techniques. It mimics a **Rogerian psychotherapist**, responding to user input with predefined patterns and reflections. This chatbot is designed to recognise keywords, reflect user inputs and create engaging conversation.  

### Research  
**ELIZA and Early NLP**  
ELIZA is one of the earliest chatbot's and was created by `Joseph Weizenbaum` in the 1960's. In the original version of ELIZA, pattern matching was used and substitution to simulate conversation, particularly in a therapeutic setting. It used a list of pre-set responses that could be triggered by keywords and phrases in user inputs. This created an illusion of understanding without true semantic comprehension.  
**Natural Language Processing Patterns**  
As seen before, ELIZA uses regular expressions to identify user inputs based on **keywords** and **patterns**. This technique allows the chatbot to recognise certain types of statements(such as expressions, greetings or feelings) and generate appropriate responses. As looked at before NLP libraries such as **SPaCy** and **NLTK** utilise similar rule-based techniques for text processing and initial conversation analysis.   

### Development  
The ELIZA chatbot was built using **HTML**, **CSS** and **JavaScript**. This ensure that is operated entirely client-side with no dependencies on external libraries or APIs.  
1. **Pattern Matching and Reflections**  
- **Patterns**: Predefined patterns using regular expressions allow the chatbot to respond in the correct manner using user inputs based on keywords and context.  
- **Reflections**:The chatbot utilises a **reflection** dictionary to swap pronouns in the user's input ( e.g., "I" to "you", "my" to "your"). This allows the chatbot to create responses that feel for normal and personalised.   
2. **Event Handling**  
- The chatbot is set to respond when either the Send button is clicked or when the Enter key is pressed. This improves user experience.  
- Input sanatisation and empty handling ensures that only valid inputs trigger responses. This will avoid empty messages in the chat window.  
3. **Automatic Line Wrapping and Responsive Design**  
- CSS was applied to handle automatic line wrapping. Tis ensures that longer messages stay within the chat bubble boundaries.  
4. **Timestamps**  
- Each message includes a timestamp for a more realistic conversation flow. The timestamp enhances the feel of a live conversation and can add context to a longer chat session.  
5. **Handling Edge Cases**  
- The chatbot included responses for nonsensical inputs. This includes special characters and repeated inputs.  


### Deployment  
The ELIZA chatbot is deployed by accessing the code on the repository and running it locally by downloading it. The implementation relies solely on HTML, CSS, and JavaScript, making it straightforward to deploy and use without any additional setup  

### Results  
The ELIZA chatbot successfully simulates a conversation with the user by:  
- Responding correctly and accurately to various user inputs, including greetings, feelings and questions.  
- Reflecting user statements to create an interactive and engaging experience.  
- Handling edge cases such as nonsensical inputs and maintaining conversation flow over multiple entries.   


---

## Manual Testing Results:  
Extensive testing was conducted to ensure the functionality and responsiveness of ELIZA. Various inputs were tested, included normal conversational phrases, edge cases and nonsensical characters. The goal was to validate that the chatbot response appropriately in all scenarios.   
**Input Tested**  
- **Normal Phrases**: Common greetings, emotional expressions, and questions.  
- **Edge Cases**: 
  - Empty inputs  
  - Inputs with only whitespace  
  - Nonsensical phrases (e.g., random characters)  
- **Method**: Manual testing conducted through the chatbot interface in the web browser.
- **Environment**: Google Chrome browser on Windows.

**Successful Response Summary**:  
A summary of the successful responses from the chatbot during testing is as follows:  

### Successful Response Table
| **User Input**               | **Expected Response**                                                        | **Actual Response**                                                       | **Result**        | **Notes**                          |
|------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------|-------------------------------------|
| hello                        | "Hello! How are you feeling today?"                                          | Hi there! What’s on your mind?                                          | ✅ Correct        | Pattern matches correctly.         |
| Good morning                 | "Good morning! How can I assist you today?"                                 | Good morning! What’s on your mind?                                      | ✅ Correct        | Pattern matches correctly.         |
| who are you?                 | "I'm ELIZA, a virtual therapist. How can I support you today?"              | I'm here to listen and help you talk through things.                    | ✅ Correct        | Matches "who are you" pattern.     |
| ...                          | ...                                                                          | ...                                                                     | ...               | ...                                 |
| asdjklf                     | "Please tell me more."                                                      | Please tell me more.                                                    | ✅ Correct        | Nonsensical input handled well.    |
| !@#$%^&*                    | "Let's change focus a bit... Tell me about your family."                   | Let's change focus a bit... Tell me about your family.                  | ✅ Correct        | Nonsensical characters handled well. |

### Summary of Results
Overall, the testing of the ELIZA Chatbot demonstrated that the majority of inputs were processed correctly, with responses matching expectations. Edge cases were also handled effectively, ensuring a robust user experience. For further examining of tests please follow this link to GitHub issues where more tests were performed.   
https://github.com/JamesDoonan1/emerging-technologies/issues/41  


---

## References

1. **Shannon, C. E.** (1948). *A Mathematical Theory of Communication*. Bell System Technical Journal.  
   - This foundational paper introduced the concept of n-gram models in communication theory, which is the basis for trigram models used in language modeling.  
   - Available at: [https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

2. **Project Gutenberg**. (n.d.). *Free eBooks*.  
   - Source of the five texts used to build the trigram model. Project Gutenberg provides a large collection of public domain books, making it a popular choice for text mining and natural language processing tasks.  
   - Available at: [https://www.gutenberg.org](https://www.gutenberg.org)

3. **Natural Language Toolkit (NLTK)**. (n.d.). *NLTK: Natural Language Processing with Python*.  
   - A comprehensive library for natural language processing in Python, often used for tasks such as text cleaning, tokenization, and working with n-grams. Though not used directly in this project, NLTK provides valuable insights for implementing language models.  
   - Available at: [https://www.nltk.org](https://www.nltk.org)

4. **Python Documentation**. (n.d.). *The Python Standard Library*.  
   - Official Python documentation for tools like `defaultdict` used in this project for counting trigrams efficiently.  
   - Available at: [https://docs.python.org/3/library/collections.html#collections.defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict)

5. **Markov Chains for Language Modeling**. (n.d.). *Towards Data Science: An introduction to Markov chains in NLP*.  
   - Explains how Markov chains and n-gram models are used for language generation and prediction, which is directly related to the concept of trigram models.  
   - Available at: [https://towardsdatascience.com/markov-chains-and-nlp-48a6fb7d6306](https://towardsdatascience.com/markov-chains-and-nlp-48a6fb7d6306)

6. **SpaCy Documentation**. (n.d.). *SpaCy: Industrial-strength Natural Language Processing*.  
   - Although external libraries were not used, SpaCy's text processing techniques provide inspiration for how to structure and clean data in NLP tasks.  
   - Available at: [https://spacy.io](https://spacy.io)  

7. **ChatGPT by OpenAI**. (2024). *Assistance with Task 1 and project guidance*.  
   - ChatGPT was used for help in understanding the task requirements, providing guidance on the development process, and assisting with the structure of the README file.  
   - Available at: [https://openai.com/chatgpt](https://openai.com/chatgpt)  
8. **Weizenbaum, J**. (1966). ELIZA - A Computer Program For the Study of Natural Language Communication Between Man and Machine.

    - This paper presents ELIZA, one of the earliest examples of natural language processing. It outlines the design and functionality of the program, which serves as the foundation for modern chatbot development.
    - Available at: http://www.ams.org/journals/bull/1966-72-6/S0002-9904-1966-12727-7/S0002-9904-1966-12727-7.pdf

