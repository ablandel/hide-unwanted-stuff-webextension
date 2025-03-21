for (const rule of rules) {
	if (rule.idToBeHidden !== undefined) {
		hideElementById(rule.idToBeHidden);
	} else if (rule.parentClass !== undefined && rule.childClass !== undefined) {
		hideParentElementByChildClassAndParentClass(
			rule.childClass,
			rule.parentClass,
		);
	} else if (rule.classToBeHidden != null) {
		hideElementByClass(rule.classToBeHidden);
	} else {
		console.debug(`Nothing to do. Unsupported rule: ${JSON.stringify(rule)}`);
	}
}

function hideElementById(elementId) {
	console.debug(
		`Applying the hiding rule on the element with the \`${elementId}\` ID.`,
	);
	const element = document.getElementById(elementId);
	element.style.display = "none";
}

function hideParentElementByChildClassAndParentClass(childClass, parentClass) {
	console.debug(
		`Applying the hiding rule on the closest parent element with the \`${parentClass}\` class and a child element with the \`${childClass}\` class`,
	);
	const children = document.querySelectorAll(childClass);
	for (const child of children) {
		const parentToBeHide = child.closest(parentClass);
		parentToBeHide.style.display = "none";
	}
}

function hideElementByClass(elementClass) {
	console.debug(
		`Removing the \`${elementClass}\` class on each element using it.`,
	);
	const elements = document.querySelectorAll(elementClass);
	for (const element of elements) {
		element.classList.remove(elementClass);
		// To handle tailwind CSS classes suppression
		if (elementClass.startsWith(".")) {
			element.classList.remove(elementClass.slice(1));
		}
	}
}
