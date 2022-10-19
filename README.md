# Polyfill.io API
> The fork of the [Financial-Times/polyfill-service](https://github.com/Financial-Times/polyfill-service) to bring some optimizations.

## Differences
* Deps revision: only the latest version of the [polyfill-library@3](https://github.com/Financial-Times/polyfill-library) is used, so `node_modules` size is about 1/7 of the original — 471M vs 3.4G.
* Node.js 18 instead of 12
* Moved to yarn

### Integrated bundle analyzer
```bash
curl --location --request POST 'https://polyfill.qiwi.com/__analyze' \
--form 'file=@"/bundle1.js"' \
--form 'file=@"/bundle2.js"' \
--form 'flags="always"' \
--form 'useComputeAtEdgeBackend="no"' \
--form 'hostname="polyfill.qiwi.com"' \
--form 'unknown="unknown"' \
--form 'omit="['\''setImmediate'\'']"'
```

[@qiwi/create-polyfill-service-url](https://github.com/qiwi-forks/polyfill-service-url-builder) for more options info


## License

Polyfill.io is licensed under the terms of the [MIT license](./LICENSE.md).
