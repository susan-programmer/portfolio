from flask import Flask, render_template, request

app = Flask(__name__)

# سوالات آزمون
questions = [
    {
        "question": "کدام زبان برنامه‌نویسی برای توسعه وب فرانت‌اند استفاده می‌شود؟",
        "options": ["Python", "Java", "JavaScript", "C++"],
        "answer": "JavaScript"
    },
    {
        "question": "واحد پردازش مرکزی در کامپیوتر چه نام دارد؟",
        "options": ["GPU", "HDD", "CPU", "RAM"],
        "answer": "CPU"
    },
    {
        "question": "کدامیک از موارد زیر یک سیستم‌عامل نیست؟",
        "options": ["Windows", "Linux", "Python", "macOS"],
        "answer": "Python"
    },
    {
        "question": "کدام مفهوم مربوط به هوش مصنوعی است؟",
        "options": ["Big Data", "Machine Learning", "Cloud Computing", "Networking"],
        "answer": "Machine Learning"
    },
   
  
]


@app.route('/', methods=['GET', 'POST'])
def quiz():
    if request.method == 'POST':
        score = 0
        for i, question in enumerate(questions):
            selected_option = request.form.get(f'question_{i}')  # پاسخ انتخاب‌شده کاربر
            if selected_option == question["answer"]:  # مقایسه با پاسخ صحیح
                score += 1
        return render_template('result.html', score=score, total=len(questions))
    
    return render_template('index.html', questions=enumerate(questions))  # شماره‌گذاری سوالات

if __name__ == '__main__':
    app.run(debug=True)
