# Lesbox
_Code less with lesbox for making custom styled select box..._

## HTML Strucure

```html
<div class=”lesbox-wrapper“ id=”list-id”>
  <select>
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select>
</div>
```

## Initialization
Initialize with:
```javascript
$('#list-id').lesbox();
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
dropdownClass | string | lesbox-wrapper | It’s the parent container of the html select box.
dropdownIcon | string | default | It’s the class name/s of the dropdown icon. E.g dropdownIcon: “dropdown-icon”. Incase if font awesome icon has to be added, the value can be something like this “fa fa-angle-down”.
listHeading | string | List Items | Custom Select box list heading.
listName | string | list_name | Name attribute value of the respective select box.
additionalLinkClass | string | null | If there is any additional style class that needs to be added to the dropdown link, then that can be specified using this setting.

## Custom styling of the select box
Use the following classes to make any desired css changes to the respective element.

### 1.	.lesbox-link
For styling the dropdown heading container use this class to add different css properties.

### 2.	.lesbox-list-list
For styling the dropdown box.

### 3.	.lesbox-list-item
For styling the dropdown outer list block.

### 4.	.lesbox-list-item__link
For styling the dropdown list item link.

## Browser Support
Custom select box works on IE9+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

## Dependencies
jQuery 2.1.4+
