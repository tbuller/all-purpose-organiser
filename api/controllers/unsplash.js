const secretKey = process.env.REACT_APP_UNSPLASH_SECRET_KEY

const UnsplashController = {
  RetrieveData: (req, res, next) => {
    const { itemName } = req.body;

    fetch(`https://api.unsplash.com/search/photos?query=${itemName}&client_id=${secretKey}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          res.status(200).json({ message: "OK", data: data });
        } else {
          res.status(500).json({ message: "Bad request", data: data });
        }
      })

    
  }
}

module.exports = UnsplashController;