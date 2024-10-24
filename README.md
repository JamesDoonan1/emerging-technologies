# Emerging Technologies Project

## Table of Contents
- [Overview](#overview)
- [Task 1: Trigram Model](#task-1-trigram-model)
  - [Research](#task-1-research)
  - [Comparison of Work](#task-1-comparison-of-work)
  - [Justification for Approach](#task-1-justification)
  - [Development](#task-1-development)
  - [Results](#task-1-results)
- [Task 2: Text Generation](#task-2-text-generation)
  - [Justification for Approach](#task-2-justification)
  - [Development](#task-2-development)
  - [Results](#task-2-results)
- [Task 3: Model Analysis](#task-3-model-analysis)
  - [Justification for Approach](#task-3-justification)
  - [Development](#task-3-development)
  - [Results](#task-3-results)
- [Task 4: Export Model to JSON](#task-4-export-model-to-json)
  - [Justification for Approach](#task-4-justification)
  - [Development](#task-4-development)
  - [Results](#task-4-results)
- [ELIZA Chatbot Project](#eliza-chatbot-project)
  - [Research](#eliza-research)
  - [Development](#eliza-development)
  - [Deployment](#eliza-deployment)
  - [Results](#eliza-results)
- [Testing](#testing)
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

**3.Choice of Texts from Project Gutenberg vs. Modern Texts**  
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

{' LE': 2789, 'LET': 1288, 'ETT': 997, 'TTE': 2141, 'TER': 7254, 'ER ': 17193, 'R T': 4524, ' TO': 16087, 'TO ': 14617, 'O M': 1842, ' MR': 1372, 'MRS': 374, 'RS.': 716, 'S. ': 3141, '. S': 1466, ' SA': 3993, 'SAV': 180, 'AVI': 512, 'VIL': 479, 'ILL': 3706, 'LLE': 1195}  

After sharing my results with ChatGPT. It was able to tell me some notable observations. 
* ' TO' appears frequently (16,087 occurrences), reflecting its common usage in English as part of prepositional phrases and infinitive verbs.
* 'THE' appears 55,432 times, which is unsurprising, as "the" is the most common word in English.
* Personal titles like ' MR', 'MRS', and common pronouns like 'YOU' are also frequently observed.
* The trigram 'AND' appears 19,336 times, a reflection of its common usage in English conjunctions.

---

## Task 2: Text Generation
### Justification for Approach
(Insert justification for Task 2 here...)

### Development
(Insert development details for Task 2 here...)

### Results
(Insert the output or explanation of results for Task 2 here...)

---

## Task 3: Model Analysis
### Justification for Approach
(Insert justification for Task 3 here...)

### Development
(Insert development details for Task 3 here...)

### Results
(Insert the output or explanation of results for Task 3 here...)

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
### Research
(Insert research for ELIZA chatbot here...)

### Development
(Insert development details for ELIZA chatbot here...)

### Deployment
(Explain how the chatbot was deployed using GitHub Pages and include the link.)

### Results
(Insert results for ELIZA chatbot here...)

---

## Testing
- Document any testing done for each task and the ELIZA project.
- Include any unit tests written and the results of those tests.

---

## Final Thoughts and Challenges
- Discuss any challenges encountered during the project.
- Explain how you overcame those challenges or refactored your code to improve it.

---

## References
- List of all references used throughout the project (e.g., research papers, documentation, and any sources cited).
