exports.definition = {
	config: {
		columns: {
		    "${COLUMN_NAME}": "string",
		},
		adapter: {
			type: "sql",
			collection_name: "${COLLECTION_NAME}"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};