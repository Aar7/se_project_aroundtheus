# Project 3: Around The U.S.

## Overview

- Project name
- Project Description
- Links
- Images
- Recent changes
- Change History

**_Project Name:_** Around the U.S.

**_Project Description:_**

The page does not have any actual function, but nearly every element on the page is part of a flex-box or grid-type layout. These techniques ensure that blocks and elements follow predictable and manageable positioning and sizing that can be logically maintained.
CSS Grid is implemented in the image cards as an alternative to flex-box because of the ratio of simplicity to requirements. Using flexbox would require more positioning and considerations that CSS Grid is designed to tackle.
When positioning major blocks of elements in single rows or columns, however, flex-box was used since it can achieve that with little code.

The page also features responsive design for screen sizes between 320px and 1280px, inclusive. This was achieved with media queries and implicit sizing techniques like `minmax()`, `max-width`, `auto-fit`, and the `calc()` function.
Where text may overflow their containers, special rules were implemented to ensure they stay within their respective boundaries according to the design.

**_Links_**

[Link to the project on Figma](https://www.figma.com/file/ii4xxsJ0ghevUOcssTlHZv/Sprint-3%3A-Around-the-US?node-id=0%3A1)

[Overview of Project on YouTube](https://youtu.be/ax2Zk1sN_VQ)

[View the site on GitHub Pages](https://aar7.github.io/se_project_aroundtheus/)

**_Images_**

[Page at 1280px](./1280px_demo.jpg)

[Page at 320px](./320px_demo.jpg)

**_Recent changes_**

> `06-4-2024`

_Major_

1. Refactor `toggleSubmitButtonState()` to comply with the Single Responsibility Principle
2. Add `resetValidation()` to `FormValidators.js`
   - Call `resetValidation()` when opening 'edit profile modal'

_Minor_

1. Refactor code
   - Remove indication that globally-used class variables are private by removing underscores preceding the identifier names
     - Example: `_toggleSubmitButtonState()` -> `toggleSubmitButtonState()`
   - Remove repeated selector queries to save resources
     - Add one-time selector queries to class constructors where possible

---

---

---

**_Change History_**

> `03-21-2024`

_Major_

- Cleaned up duplicate code in media queries
- Ensured font and design stylings were up to specifications
- Ensured that layout specifications were met
- Created a video overviewing the project and demonstrating its functions
- Added script.js

_Minor_

- Reset default margins for the card headings.

> `03-24-2024`

_Major_

- Added responsive modal for edit feature. JS not implemented.

> `03-29-2024`

_Major_

- Added functionality to modal. Profile edit button, modal save and close buttons are functional. Entries can be saved for profile header and description before refreshing.
- Added JS to enable cards to be dynamically generated based on precoded values and future implementation of profile 'add' button to allow users to add cards.

> `04-22-2024`

_Major_

1. Implement modal for adding cards
   - Add ability to generate card according to user input
2. Implement delete icon to be gnerated on each generated card
   - Add ability to delete respective card
3. Implement ability to 'open' cards when user clicks on one
4. Implementd smooth opening and closing of modals

_Minor_

1. Refactor 'for' loop for generating cards to forEach loop
2. Implement style-change for like-button

_Revisions_

1. Removed hardcoded event listeners for close buttons for each popup
   - Implement array containing all close buttons and iterate through each at the end of index.js to add event listeners

> `05-10-2024`

_Major_

1. Enabled form validation for current and future forms
2. Enable users to click outside modals or press 'Esc' when modals are open at any time to close them

> `05-13-2024`

_Minor_

1. Refactor code
2. Fix escape-to-close and click-overlay-to-close event listeners

> `06-3-2024`

_Major_

1. Refactored `getCardElement(...)` into `Card.js` as a class
2. Refactored methods and properties of `validation.js` into `FormValidator.js` as a class

_Minor_

1. Refactor code
   - Removed unnecessary variables
2. Added `name` attributes to forms in modals to avoid using names with dashes

> `06-4-2024`

_Major_

1. Refactor `toggleSubmitButtonState()` to comply with the Single Responsibility Principle
2. Add `resetValidation()` to `FormValidators.js`
   - Call `resetValidation()` when opening 'edit profile modal'

_Minor_

1. Refactor code
   - Remove indication that globally-used class variables are private by removing underscores preceding the identifier names
     - Example: `_toggleSubmitButtonState()` -> `toggleSubmitButtonState()`
   - Remove repeated selector queries to save resources
     - Add one-time selector queries to class constructors where possible
