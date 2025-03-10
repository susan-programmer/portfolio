{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyMMW0OVeHq7/EXh17RRSFg2",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/susan-programmer/portfolio/blob/main/handwrite_recognition.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "import logging\n",
        "from transformers import TrOCRProcessor, VisionEncoderDecoderModel\n",
        "from PIL import Image\n",
        "from sentence_transformers import CrossEncoder\n",
        "\n",
        "# خاموش کردن پیام‌های اضافی\n",
        "logging.getLogger(\"transformers\").setLevel(logging.ERROR)\n",
        "\n",
        "# مدل OCR برای استخراج متن از تصویر\n",
        "processor = TrOCRProcessor.from_pretrained(\"microsoft/trocr-large-handwritten\")\n",
        "model = VisionEncoderDecoderModel.from_pretrained(\"microsoft/trocr-large-handwritten\")\n",
        "\n",
        "# مدل Cross-Encoder برای مقایسه معنایی\n",
        "cross_encoder = CrossEncoder('cross-encoder/stsb-roberta-large')\n",
        "\n",
        "def extract_text(image_path):\n",
        "    image = Image.open(image_path).convert(\"RGB\")\n",
        "    pixel_values = processor(images=image, return_tensors=\"pt\").pixel_values\n",
        "    generated_ids = model.generate(pixel_values, max_length=100)\n",
        "    text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]\n",
        "    return text.lower()\n",
        "\n",
        "def calculate_semantic_score(student_text, correct_answer):\n",
        "    similarity_score = cross_encoder.predict([(student_text, correct_answer)])\n",
        "    return round(similarity_score[0] * 100, 2)  # تبدیل به درصد\n",
        "\n",
        "if __name__ == \"__main__\":\n",
        "    student_image_path = \"2.jpg\"  # مسیر تصویر پاسخ دانش‌آموز\n",
        "    correct_answer = \"the capital of france is paris.\"  # پاسخ صحیح\n",
        "\n",
        "    student_text = extract_text(student_image_path)\n",
        "    score = calculate_semantic_score(student_text, correct_answer)\n",
        "\n",
        "    print(\"🔹 پاسخ استخراج شده:\", student_text)\n",
        "    print(\"✅ نمره دانش‌آموز (بر اساس شباهت معنایی):\", score, \"%\")\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "PpsZcgazByPa",
        "outputId": "a1f6b5b8-8b33-41c3-be10-a98d1ef79c3a"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "🔹 پاسخ استخراج شده: the capital of france is paris .\n",
            "✅ نمره دانش‌آموز (بر اساس شباهت معنایی): 95.06 %\n"
          ]
        }
      ]
    }
  ]
}