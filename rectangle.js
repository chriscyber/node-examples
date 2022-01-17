export default (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); // error object is first argument in error callback
  } else {
      setTimeout(() => // to sim asyncronous operation like reading file from db
        callback(null, { // no error here for first argument like the outer fx
          perimeter: () => 2 * (x + y), // no x y perameters since this callback has access to outer fx's parameters
          area: () => x * y
    }),
    2000
    );
  }
};