import openai
from flask import session

# Load your OpenAI API key
openai.api_key = "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"

def generate_lesson_plan(age, topic):
    # Your original generate_chat_content function
    # ...
    prompt = f"Create age-appropriate and engaging content for {age} grade level students on the topic of {topic}. Include text, suggestions for visual content, and activities. Ensure there's detailed differentiation so that different levels of students can benefit from the lesson plan"
    user_input = prompt
    model_engine = "gpt-4" 

    # Create a chat message from user input
    messages = [
        {"role": "system", "content": "You are a highly creative teacher who loves designing fun engaging and age appropriate class curriculums."},
        {"role": "user", "content": user_input},
    ]

    # Make a request to the Chat API
    response = openai.ChatCompletion.create(
        model=model_engine,
        messages=messages
    )

    
    # Extract the assistant's reply
    assistant_reply = response.choices[0].message["content"].strip()
    session['initial_lesson_plan'] = assistant_reply

    # wait for 10 seconds
    #assistant_reply = "hello world"
    #time.sleep(3)

    return assistant_reply

def generate_materials():
    # Your original generate_materials function
    # ...
    preprompt = "The following is a lesson plan: \n"
    lessonplan = session.get('initial_lesson_plan')
    postprompt = "\n Can you write the above as it is but hyperlink the words or terms that should be hyperlinked so that the teacher can access materials (images, videos, books, articles, worksheets, diagrams) described above by clicking on the hyperlink? \n For each of the above terms that need a hyperlink, I need a source (like google, amazon or pinterest or something else) along with a query that I should enter when I go to that source. Can you provide the source and query for each of the above terms? The query shouldn't be too broad to ensure that the results are relevant and helpful for the teacher. Include urls."
    user_input = preprompt + lessonplan + postprompt
    #print(user_input)
    model_engine = "gpt-4" 

    # Create a chat message from user input
    messages = [
        {"role": "system", "content": "You are a highly creative teacher who loves designing fun engaging and age appropriate class curriculums."},
        {"role": "user", "content": user_input},
    ]

    # Make a request to the Chat API
    response = openai.ChatCompletion.create(
        model=model_engine,
        messages=messages
    )
    
    # Extract the assistant's reply
    assistant_reply = format_response(response.choices[0].message["content"].strip())
    return assistant_reply



def format_response(response_text):
    return response_text.replace('\n', '<br>')
