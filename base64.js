encode(str: string): string {
    if (!str) {
      return null;
    }

    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      }),
    );
  }

  decode(str: string): string {
    if (!str) {
      return null;
    }

    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
  }
