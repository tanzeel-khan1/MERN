const product = async (req, res) => {
  try {
    res.status(200).json({
      id: "1",
      name: "babar",
      Address: "New York",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdvA71PY0tb6pUjhOZHOAfikh56Nc7q4-PQ&s",
      phone: "1",
    },
  );
    console.log("success");
  } catch (error) {
    console.error("Product Error:", error);
    res.status(500).send("Something went wrong in product route.");
  }
};

module.exports = { product };


