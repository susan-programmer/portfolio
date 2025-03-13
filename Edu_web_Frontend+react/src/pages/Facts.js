import React from "react";

function Facts() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold text-primary">نکات جالب درباره مغز</h1>
      <ul className="list-group mt-4">
        <li className="list-group-item">مغز حدود ۸۶ میلیارد نورون دارد.</li>
        <li className="list-group-item">مغز فقط ۲۰ وات انرژی مصرف می‌کند!</li>
        <li className="list-group-item">مغز هنگام خواب نیز فعال است و خاطرات را پردازش می‌کند.</li>
        <li className="list-group-item">مغز از ۲۰٪ کل خون و اکسیژن بدن بهره گیری می‌ کند.</li>
        <li className="list-group-item">بوی شکلات امواج مغزی تتا را افزایش می‌دهد و باعث آرامش می‌شود.</li>
        <li className="list-group-item">زمانی که نوزاد تازه متولد شده هستیم،بیشترین سلول هاي مغزی ممکن در تمام دوره ي زندگیمان را داریم.</li>
      </ul>
      <img
        src="/hqdefault.jpg"
        alt="عملکرد مغز"
        className="img-fluid rounded shadow-lg mt-4"
        width="400px"
      />
    </div>
  );
}

export default Facts;
