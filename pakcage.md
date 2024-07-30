The package.json holds a true point of refrence for each project in javascript we should keep to this as for other languages all can be enumerated to have a singular point of truth that can even be perpaps tagged like in package.json foreign fields will not cause us failure we should establish what all new json fields mean

private : if this is set to true this will not be versioned in the package manager publish npx lerna publish this is good to be set true for packages only ect most will most likley be build at runtime using workspace packages cli ect are examples of things by default we would want to true unless whitelisted we can use a local

shipyard.writeoff file to speciy what ship yard default actiosnare disabled such as enabling this dirs children package.json[private] = false
