# Emerging Technologies Project

## Table of Contents
- [Overview](#overview)
- [Task 1: Trigram Model](#task-1-trigram-model)
  - [Research](#task-1-research)
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
The trigram model used in Task 1 belongs to the broader class of **n-gram models**. Trigrams specifacally focuse on **sequence of three characters**. This allows the model to capture the structure of the English language much more efficiently than unigrams and bigrams which were looked at in lectures. The work of **Claude Shannon** was very important when it came to researching for this task. Shannon pioneered the study of probabilitic models in text generationinhis 1948 paper _A Mathematical Theory of Communication_. Trigrams, as a third-order Markov model, provide enough context for decent text generation without over complexity. 
**Text Preprocessing in NLP**
Preproccessing is a very important step in most natural language processing (NLP) tasks. It invlolves the processess of removing unwanted characters and standarising the format of the text to prevent irrelevant data from effecting the model. Some similar methods are used in NLP libraries like **NLTK** and **SpaCy**. These streamline tasks like removing punctuation and converting text to lowercase or uppercase. 
**Project Gutenberg Texts**
In this task, We were instucted to select five works from **Project Gutenberg**. What is interesting is that these texts represent a variety of writing styles and genres. This really helps broaden the model with a large spectrum of English usage. 

### Justification for Approach
**Data Cleaning**
I implemented a cleaning process that removed non-alphabetic characters (except for spaces and full stops) and stadardised all text to upercase. This is to ensure that the model focused only on relevant text elements. The main reason I converted all characters to upper case was to avoid treating "A" and "a" as different entities. 
**Building the Trigram Model**
The trigram model was built by iterating through the sequences of three consecutive characters and counting the frequency of each trigram. In this task I used Python's 'defaultdict(int)' to store trigram counts. this allowed for automatically intiliase and update counts effieciently. This data structure reduces the need for manual key checks, resulting in cleaner and faster code execution. I implemented a cleaning process that removed non-alphabetic characters (except for spaces and full stops) and stadardised all text to upercase. This is to ensure that the model focused only on relevant text elements. The main reason I converted all characters to upper case was to avoid treating "A" and "a" as different entities. 
**Combining Texts from Project Gutenberg**
By processing five diverse texts from Project Gutenberg, each which were cleaned and analzed seperatley, I could create a very robust trigram model. Their trigram counts were then combined into a single dictionary. This ensured the model reflected the variety of writing styles present in the English language. 

### Development
**Data Cleaning**
* _clean_text()_ : This function removes unwanted characters (e.g., punctuation, special characters) and converts the text to uppercase. It also replaces multiple spaces with a single space to avoid artificially inflating trigram counts.
**Building the Trigram Model**
* _build_trigram_model()_ : This function iterates through the cleaned text and extracts three-character sequences (trigrams). Each trigram is stored in a defaultdict(int), and its count is incremented each time it is encountered.
**Combining texts fro Project Gutenberg**
* _process_multiple_files()_ : This function processes multiple texts, applying the _clean_text()_ function to clean each file, and then using _build_trigram_model()_ to generate a trigram model for each text. The trigram counts from each file are combined into a single dictionary, resulting in a comprehensive model.

### Results
The trigram was succesfully built after processing the five texts from Project Gutemberg. This is an example of the most frequent trigrams in the combined model:

{' LE': 2789, 'LET': 1288, 'ETT': 997, 'TTE': 2141, 'TER': 7254, 'ER ': 17193, 'R T': 4524, ' TO': 16087, 'TO ': 14617, 'O M': 1842, ' MR': 1372, 'MRS': 374, 'RS.': 716, 'S. ': 3141, '. S': 1466, ' SA': 3993, 'SAV': 180, 'AVI': 512, 'VIL': 479, 'ILL': 3706, 'LLE': 1195}

After sharing my results with ChatGPT. It was able to tell me some notible observations. 
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
