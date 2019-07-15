export default class UrlResourceResolver {
  constructor() {
    this.loadedData = { };
  }

  setResourceData(identifier, jsonData) {
    this.loadedData[identifier] = jsonData;
  }

  resolve(path) {
    const pathSegments = path.split('.');
    const firstPathSegment = pathSegments[0];

    if (typeof this.loadedData[firstPathSegment] !== 'undefined') {
      var promise = Promise.resolve(this.loadedData);
    } else {
      var promise = fetch('resources.json')
      .then(res => res.json())
      .then(json => this.loadedData = { ...this.loadedData, ...json });
    }

    return promise.then(startingData => {
      let value = this.loadedData;
      let valueParent = undefined;

      pathSegments.forEach(segment => {
        if (typeof value === 'object') {
          valueParent = value;
          value = value[segment];
        } else {
          value = undefined;
        }
      });

      if (isFunction(value)) {
        if (valueParent) {
          value = value.call(valueParent);
        } else {
          value = value();
        }
      }

      return value;
    });
  }
}

function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
