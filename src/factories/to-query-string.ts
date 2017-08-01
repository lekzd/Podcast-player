export const toQueryString = (params: {[key: string]: string|number|boolean|undefined} = {}): string => {
    return Object.keys(params).reduce(
            (sum, key) => {
                if (params[key] !== undefined) {
                    return sum + key + '=' + params[key]!.toString() + '&';
                }
                return sum;
            },
            '?'
        ).replace(/\&$/, '');
};