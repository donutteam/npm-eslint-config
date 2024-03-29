//
// Eslint Configuration
//

/** @type {import("eslint").ESLint.ConfigData} */
module.exports =
	{
		env:
			{
				es2021: true,
				node: true,
				browser: true,
			},
		extends:
			[
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
			],
		ignorePatterns:
			[
				"**/build/*",
				"**/dist/*",
				"**/lib/*",
				"**/static/*",
			],
		parser: "@typescript-eslint/parser",
		parserOptions:
			{
				ecmaVersion: "latest",
				sourceType: "module",
			},
		plugins:
			[
				"@typescript-eslint",
			],
		rules:
			{
				// Enforce braces on the next line
				//
				//	The JavaScript community, by and large, has decided this is NOT
				//	how code should be formatted but their opinion, frankly, sucks
				//
				//	Braces being on the next line is substantially more readable and
				//	also offers consistency in brace placement between functions and
				//	objects
				"brace-style":
					[
						"error",
						"allman",
					],

				// Require trailing commas on objects spread across multiple lines
				//
				//	This simply looks nicer and makes adding new items/keys simpler
				"comma-dangle":
					[
						"error",
						"always-multiline",
					],

				// Require tabs
				//
				//	Base rule is disabled as recommended by @typescript-eslint
				//
				//	Besides the fact that spaces are trash, there is legitimate
				//	accessibility concerns related to using them
				//
				// 	Update: Tabs are still great but @typescript-eslint/indent is borked and stupid, so I'm disabling this in favor of letting WebStorm handle it.
				// "indent": "off",
				// "@typescript-eslint/indent":
				// 	[
				// 		"error",
				// 		"tab", // The only correct indentation
				// 		{
				// 			SwitchCase: 1,
				// 		},
				// 	],

				// Disallow unused variables EXCEPT function arguments
				//
				//	Base rule is disabled as recommended by @typescript-eslint
				//
				//	Allowing function arguments is massively beneficial for any
				//	potential revisions to code that may start using unused
				//	arguments
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars":
					[
						"error",
						{
							args: "none",
						},
					],

				// ALWAYS REQUIRE SEMICOLONS!!!
				//
				//	Automatic semicolon insertion is a garbage language """feature"""
				//	and developers who rely on it should genuinely feel ashamed
				"semi":
					[
						"error",
						"always",
					],
			},
	};