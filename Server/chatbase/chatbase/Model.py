from transformers import GPT2LMHeadModel, GPT2TokenizerFast

# Load pre-trained model
model = GPT2LMHeadModel.from_pretrained('./customer-support-chatbot/models/seq2seq/model.py')

# Load pre-trained tokenizer
tokenizer = GPT2TokenizerFast.from_pretrained('gpt2')

# Rest of your code...