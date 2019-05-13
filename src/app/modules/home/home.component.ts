declare var require: any;
import { Component, OnInit } from '@angular/core';
var shortUuid = require('short-uuid');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  guids: string[] = [];
  translator: any;
  copiedClass = 'invisible';
  dropdownVisible = true;

  ngOnInit() {
    this.translator = shortUuid();
    this.generateGuid();
  }

  clear() {
    this.guids = [];
    this.generateGuid();
  }

  /**Copy to the clipboard */
  copy(str: string) {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }

    this.copiedClass = 'fade-out';
    setTimeout(() => { this.copiedClass = 'invisible' }, 500);

  }

  generateGuid() {
    this.guids.push(this.translator.uuid());
  }

  getShort(uuid: string) {
    return this.translator.fromUUID(uuid);
  }

  toggleDropdown() {
    this.dropdownVisible = ! this.dropdownVisible;
  }
}
