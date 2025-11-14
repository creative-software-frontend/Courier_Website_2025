import { Link } from "react-router-dom";

const ExchangePolicyBanglaPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <div className="d-flex justify-content-between">
            <h2>বিনিময় নীতি</h2>
            <Link
              to="/exchange-policy"
              className="badge bg-success link text-white py-2"
              style={{ fontSize: "16px", fontWeight: "500", height: "35px" }}
            >
              Exchange Policy in English
            </Link>
          </div>

          <p>
            1. যখন ডেলিভারি এজেন্ট দ্বারা একটি ডেলিভারির প্রচেষ্টা করা হয় এবং
            গ্রাহক পরিষেবা অনুরোধকারীর সম্মতিতে আংশিকভাবে ডেলিভারি পেতে ইচ্ছুক
            হন তখন এটি একটি আংশিক ডেলিভারি হিসাবে বিবেচিত হবে, এবং বাকি পার্সেল
            একটি বিনিময় হিসাবে গণ্য হবে।
          </p>

          <p>
            2. এই ধরনের কোনো আংশিক ডেলিভারির ক্ষেত্রে, প্যাকেজটি পরিষেবা
            অনুরোধকারীকে প্রায় একই সময়সীমার মধ্যে ফেরত দেওয়া হবে যে টি পিক-আপ
            থেকে ডেলিভারি প্রচেষ্টা পর্যন্ত প্রাথমিক পণ্য যাত্রা এবং পরিষেবা
            অনুরোধকারী আংশিকভাবে ডেলিভারি পাশাপাশি বিনিময় পরিষেবা ফি প্রদান
            করতে দায়বদ্ধ থাকবে <b>CourierX</b> এর কাছে।
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExchangePolicyBanglaPage;
