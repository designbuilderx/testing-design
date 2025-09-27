import { TreeNode } from "../models/tree-node";

 export const componentsTree: TreeNode[] = [
  {
    name: 'Form Controls',
    expanded: true,
    children: [
      {
        name: 'Button',
        html: `<button style="background:#5b21b6;color:white;padding:8px 16px;border:none;border-radius:6px;">Primary Button</button>`,
      },
      {
        name: 'Input',
        html: `<input placeholder="Enter text" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>`,
      },
      {
        name: 'Textarea',
        html: `<textarea placeholder="Enter description" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;width:200px;height:80px;"></textarea>`,
      },
      {
        name: 'Checkbox',
        html: `<label style="display:flex;align-items:center;gap:6px;"><input type="checkbox"/> Accept Terms</label>`,
      },
      {
        name: 'Radio Button',
        html: `<label style="display:flex;align-items:center;gap:6px;"><input type="radio" name="radio1"/> Option 1</label>`,
      },
      {
        name: 'Switch',
        html: `<label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" style="width:40px;height:20px;"/> Toggle</label>`,
      },
      {
        name: 'Slider',
        html: `<input type="range" min="0" max="100" style="width:150px;"/>`,
      },
      {
        name: 'Select / Dropdown',
        html: `<select style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"><option>Option 1</option><option>Option 2</option></select>`,
      },
      {
        name: 'Date Picker',
        html: `<input type="date" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>`,
      },
      {
        name: 'File Upload',
        html: `<input type="file" style="border:1px solid #5b21b6;padding:4px;border-radius:6px;"/>`,
      },
    ],
  },
  {
    name: 'Layout',
    expanded: false,
    children: [
      {
        name: 'Card',
        html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:220px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                 <h4 style="margin:0 0 8px;">Card Title</h4>
                 <p style="margin:0 0 8px;">This is a simple card example.</p>
                 <button style="background:#5b21b6;color:white;padding:6px 12px;border:none;border-radius:4px;">Action</button>
               </div>`,
      },
      {
        name: 'Dialog / Modal',
        html: `<div style="border:1px solid #5b21b6;padding:16px;border-radius:8px;width:240px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.2);">
                 <h4 style="margin:0 0 12px;">Dialog Title</h4>
                 <p style="margin:0 0 12px;">This is a dialog box.</p>
                 <button style="background:#5b21b6;color:white;border:none;padding:6px 12px;border-radius:4px;">Close</button>
               </div>`,
      },
      {
        name: 'Accordion',
        html: `<div style="border:1px solid #5b21b6;border-radius:6px;width:220px;">
                 <div style="padding:8px;background:#f3f3f3;font-weight:bold;">Accordion Header</div>
                 <div style="padding:8px;">Accordion Content</div>
               </div>`,
      },
      {
        name: 'Grid System',
        html: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;width:220px;">
                 <div style="background:#e0e0e0;padding:12px;text-align:center;">Box 1</div>
                 <div style="background:#e0e0e0;padding:12px;text-align:center;">Box 2</div>
               </div>`,
      },
      {
        name: 'Divider',
        html: `<hr style="border:0;height:1px;background:#5b21b6;margin:12px 0;"/>`,
      },
      {
        name: 'Container',
        html: `<div style="max-width:300px;margin:auto;border:1px dashed #5b21b6;padding:12px;">Container</div>`,
      },
      {
        name: 'Paper / Surface',
        html: `<div style="padding:12px;border:1px solid #ccc;border-radius:6px;background:#fff;">Surface (Paper)</div>`,
      },
    ],
  },
  {
    name: 'Navigation',
    expanded: false,
    children: [
      {
        name: 'Navbar / App Bar',
        html: `<nav style="background:#5b21b6;color:#fff;padding:8px 16px;border-radius:6px;">Navbar</nav>`,
      },
      {
        name: 'Sidebar / Drawer',
        html: `<aside style="width:160px;background:#f3f3f3;padding:12px;border-radius:6px;">Sidebar Content</aside>`,
      },
      {
        name: 'Tabs',
        html: `<div style="display:flex;gap:6px;">
                 <div style="padding:6px 12px;background:#5b21b6;color:#fff;border-radius:4px;">Tab 1</div>
                 <div style="padding:6px 12px;background:#ccc;border-radius:4px;">Tab 2</div>
               </div>`,
      },
      {
        name: 'Breadcrumbs',
        html: `<nav style="font-size:14px;">Home / Library / Data</nav>`,
      },
      {
        name: 'Pagination',
        html: `<div style="display:flex;gap:6px;">
                 <button style="padding:4px 8px;">Prev</button>
                 <button style="padding:4px 8px;background:#5b21b6;color:#fff;border:none;border-radius:4px;">1</button>
                 <button style="padding:4px 8px;">2</button>
                 <button style="padding:4px 8px;">Next</button>
               </div>`,
      },
      {
        name: 'Stepper',
        html: `<div style="display:flex;gap:12px;align-items:center;">
                 <div style="background:#5b21b6;color:#fff;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:50%;">1</div>
                 <span>Step 1</span>
                 <div>→</div>
                 <div style="background:#ccc;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:50%;">2</div>
                 <span>Step 2</span>
               </div>`,
      },
    ],
  },
  {
    name: 'Data Display',
    expanded: false,
    children: [
      {
        name: 'Table',
        html: `<table style="border-collapse:collapse;width:240px;">
                 <tr><th style="border:1px solid #5b21b6;padding:6px;">Header</th></tr>
                 <tr><td style="border:1px solid #5b21b6;padding:6px;">Cell</td></tr>
               </table>`,
      },
      {
        name: 'List',
        html: `<ul style="padding:0;margin:0;list-style:disc inside;">
                 <li>Item 1</li>
                 <li>Item 2</li>
               </ul>`,
      },
      {
        name: 'Avatar',
        html: `<img src="https://via.placeholder.com/40" alt="avatar" style="border-radius:50%;width:40px;height:40px;"/>`,
      },
      {
        name: 'Badge',
        html: `<span style="background:red;color:white;padding:2px 6px;border-radius:10px;">5</span>`,
      },
      {
        name: 'Chip / Tag',
        html: `<span style="padding:4px 8px;border:1px solid #ccc;border-radius:12px;background:#f5f5f5;">Chip</span>`,
      },
      {
        name: 'Tooltip',
        html: `<span title="This is a tooltip">Hover me</span>`,
      },
      {
        name: 'Popover',
        html: `<div style="border:1px solid #ccc;padding:8px;border-radius:6px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);">Popover Content</div>`,
      },
      {
        name: 'Typography',
        html: `<div><h4>Heading</h4><p style="margin:0;">Body text</p></div>`,
      },
    ],
  },
  {
    name: 'Feedback',
    expanded: false,
    children: [
      {
        name: 'Snackbar / Toast',
        html: `<div style="background:#323232;color:#fff;padding:8px 16px;border-radius:4px;display:inline-block;">This is a toast</div>`,
      },
      {
        name: 'Dialog Alert',
        html: `<div style="padding:12px;border:1px solid red;border-radius:6px;background:#ffe5e5;">This is an alert</div>`,
      },
      {
        name: 'Progress Bar',
        html: `<progress value="50" max="100" style="width:200px;"></progress>`,
      },
      {
        name: 'Spinner / Loader',
        html: `<div style="border:4px solid #f3f3f3;border-top:4px solid #5b21b6;border-radius:50%;width:24px;height:24px;animation:spin 1s linear infinite;"></div>
               <style>@keyframes spin { 100% { transform: rotate(360deg);} }</style>`,
      },
      {
        name: 'Skeleton Loader',
        html: `<div style="background:#eee;height:20px;width:200px;border-radius:4px;animation:pulse 1.5s infinite;"></div>
               <style>@keyframes pulse { 0%{opacity:1;} 50%{opacity:0.4;} 100%{opacity:1;} }</style>`,
      },
    ],
  },
  {
    name: 'Surfaces',
    expanded: false,
    children: [
      { name: 'App Bar', html: `<header style="background:#5b21b6;color:#fff;padding:8px 16px;">App Bar</header>` },
      { name: 'Toolbar', html: `<div style="padding:8px;border-bottom:1px solid #ccc;">Toolbar</div>` },
      { name: 'Drawer', html: `<aside style="width:200px;background:#f3f3f3;padding:12px;">Drawer Content</aside>` },
      { name: 'Bottom Navigation', html: `<footer style="background:#5b21b6;color:#fff;padding:8px;text-align:center;">Bottom Navigation</footer>` },
    ],
  },
  {
    name: 'Charts',
    expanded: false,
    children: [
      { name: 'Line Chart', html: `<canvas width="200" height="100" style="border:1px solid #ccc;">Line Chart</canvas>` },
      { name: 'Bar Chart', html: `<canvas width="200" height="100" style="border:1px solid #ccc;">Bar Chart</canvas>` },
      { name: 'Pie Chart', html: `<canvas width="200" height="100" style="border:1px solid #ccc;">Pie Chart</canvas>` },
    ],
  },
  {
    name: 'Utilities',
    expanded: false,
    children: [
      { name: 'Icons', html: `<span style="font-size:24px;">⭐</span>` },
      { name: 'Colors', html: `<div style="display:flex;gap:6px;"><div style="background:#5b21b6;width:24px;height:24px;border-radius:4px;"></div><div style="background:#e91e63;width:24px;height:24px;border-radius:4px;"></div><div style="background:#4caf50;width:24px;height:24px;border-radius:4px;"></div></div>` },
      { name: 'Spacing', html: `<div style="margin:16px;padding:8px;border:1px dashed #ccc;">Spacing Example</div>` },
      { name: 'Shadows', html: `<div style="box-shadow:0 4px 8px rgba(0,0,0,0.2);padding:12px;width:120px;">Shadow Box</div>` },
    ],
  },
  {
    name: 'Forms Advanced',
    expanded: false,
    children: [
      { name: 'Autocomplete', html: `<input list="options" placeholder="Type to search..." style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/><datalist id="options"><option>Option 1</option><option>Option 2</option></datalist>` },
      { name: 'Password Input', html: `<input type="password" placeholder="Enter password" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>` },
      { name: 'Search Box', html: `<input type="search" placeholder="Search..." style="border:1px solid #5b21b6;padding:6px 28px 6px 8px;border-radius:20px;background:url('https://img.icons8.com/ios-filled/16/000000/search.png') no-repeat right 6px center;"/>` },
      { name: 'Rich Text Editor', html: `<div contenteditable="true" style="border:1px solid #ccc;padding:8px;border-radius:6px;width:240px;min-height:80px;">Editable Text...</div>` },
      { name: 'Rating Stars', html: `<div style="font-size:20px;color:gold;">⭐⭐⭐⭐☆</div>` },
    ],
  },

  {
    name: 'Layout Advanced',
    expanded: false,
    children: [
      { name: 'Masonry Grid', html: `<div style="column-count:2;gap:8px;width:220px;"><div style="background:#e0e0e0;padding:8px;margin-bottom:8px;">Box 1</div><div style="background:#e0e0e0;padding:20px;margin-bottom:8px;">Box 2</div><div style="background:#e0e0e0;padding:12px;margin-bottom:8px;">Box 3</div></div>` },
      { name: 'Stack / Flex Layout', html: `<div style="display:flex;gap:8px;"><div style="background:#e0e0e0;padding:8px;">Item 1</div><div style="background:#e0e0e0;padding:8px;">Item 2</div></div>` },
      { name: 'Carousel', html: `<div style="width:220px;overflow:hidden;position:relative;"><div style="display:flex;transition:transform 0.3s;"><img src="https://via.placeholder.com/220x100" style="flex-shrink:0;"/><img src="https://via.placeholder.com/220x100" style="flex-shrink:0;"/></div></div>` },
      { name: 'Timeline', html: `<ul style="list-style:none;padding-left:20px;border-left:2px solid #5b21b6;"><li style="margin-bottom:12px;">Step 1</li><li style="margin-bottom:12px;">Step 2</li></ul>` },
    ],
  },

  {
    name: 'Navigation Advanced',
    expanded: false,
    children: [
      { name: 'Mega Menu', html: `<div style="background:#5b21b6;color:#fff;padding:8px;width:240px;"><strong>Main</strong><div style="display:flex;gap:12px;margin-top:6px;"><div><h5>Category</h5><ul style="margin:0;padding:0;list-style:none;"><li>Item 1</li><li>Item 2</li></ul></div><div><h5>Category</h5><ul style="margin:0;padding:0;list-style:none;"><li>Item 3</li><li>Item 4</li></ul></div></div></div>` },
      { name: 'Context Menu', html: `<ul style="list-style:none;margin:0;padding:6px;border:1px solid #ccc;border-radius:6px;background:#fff;width:120px;"><li>Copy</li><li>Paste</li><li>Delete</li></ul>` },
      { name: 'Floating Action Button (FAB)', html: `<button style="width:56px;height:56px;border-radius:50%;background:#5b21b6;color:#fff;font-size:24px;border:none;">+</button>` },
      { name: 'Side Navigation Collapsible', html: `<div style="width:180px;background:#eee;padding:8px;"><details open><summary>Menu</summary><ul style="list-style:none;padding-left:12px;"><li>Sub Item 1</li><li>Sub Item 2</li></ul></details></div>` },
    ],
  },

  {
    name: 'Data Display Advanced',
    expanded: false,
    children: [
      { name: 'Data Grid', html: `<table style="width:100%;border:1px solid #ccc;border-collapse:collapse;"><tr><th style="border:1px solid #ccc;padding:6px;">ID</th><th style="border:1px solid #ccc;padding:6px;">Name</th></tr><tr><td style="border:1px solid #ccc;padding:6px;">1</td><td style="border:1px solid #ccc;padding:6px;">Alice</td></tr></table>` },
      { name: 'Tree View', html: `<ul style="list-style:none;padding-left:20px;"><li>📂 Folder<ul><li>📄 File 1</li><li>📄 File 2</li></ul></li></ul>` },
      { name: 'Calendar', html: `<table style="border-collapse:collapse;width:220px;text-align:center;"><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr></table>` },
      { name: 'Badge with Icon', html: `<div style="position:relative;display:inline-block;"><span style="font-size:24px;">🔔</span><span style="position:absolute;top:-6px;right:-6px;background:red;color:#fff;font-size:12px;padding:2px 6px;border-radius:50%;">3</span></div>` },
    ],
  },

  {
    name: 'Feedback Advanced',
    expanded: false,
    children: [
      { name: 'Notification Panel', html: `<div style="border:1px solid #ccc;padding:12px;width:220px;background:#fafafa;"><h4>Notifications</h4><p>No new messages</p></div>` },
      { name: 'Confirm Dialog', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:6px;background:#fff;"><p>Are you sure?</p><button style="background:#5b21b6;color:#fff;border:none;padding:4px 8px;border-radius:4px;">Yes</button> <button style="padding:4px 8px;">No</button></div>` },
      { name: 'Inline Validation', html: `<input placeholder="Email" style="border:1px solid red;padding:6px;border-radius:6px;"/> <div style="color:red;font-size:12px;">Invalid email</div>` },
      { name: 'Backdrop Loader', html: `<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><div style="border:4px solid #eee;border-top:4px solid #5b21b6;border-radius:50%;width:32px;height:32px;animation:spin 1s linear infinite;"></div></div>` },
    ],
  },

  {
    name: 'Media',
    expanded: false,
    children: [
      { name: 'Image', html: `<img src="https://via.placeholder.com/150" style="border-radius:6px;"/>` },
      { name: 'Video', html: `<video width="200" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">Your browser does not support video.</video>` },
      { name: 'Audio', html: `<audio controls><source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">Your browser does not support audio.</audio>` },
      { name: 'Carousel (Images)', html: `<div style="display:flex;gap:8px;overflow-x:auto;width:240px;"><img src="https://via.placeholder.com/100"/><img src="https://via.placeholder.com/100"/><img src="https://via.placeholder.com/100"/></div>` },
    ],
  },
  {
    name: 'Maps & Location',
    expanded: false,
    children: [
      { name: 'Google Map Embed', html: `<iframe src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" width="220" height="150" style="border:0;"></iframe>` },
      { name: 'Map Marker', html: `<div style="position:relative;width:60px;height:60px;"><div style="position:absolute;top:0;left:20px;width:20px;height:20px;background:#5b21b6;border-radius:50%;"></div><div style="position:absolute;bottom:0;left:25px;width:10px;height:20px;background:#5b21b6;"></div></div>` },
    ],
  },

  {
    name: 'E-commerce',
    expanded: false,
    children: [
      { name: 'Product Card', html: `<div style="border:1px solid #ccc;padding:8px;width:160px;border-radius:6px;"><img src="https://via.placeholder.com/150"/><h4 style="margin:6px 0;">Product</h4><p>$99.99</p><button style="background:#5b21b6;color:#fff;padding:6px 12px;border:none;border-radius:4px;">Add to Cart</button></div>` },
      { name: 'Shopping Cart Icon', html: `<div style="position:relative;display:inline-block;"><span style="font-size:28px;">🛒</span><span style="position:absolute;top:-6px;right:-6px;background:red;color:#fff;font-size:12px;padding:2px 6px;border-radius:50%;">2</span></div>` },
      { name: 'Price Tag', html: `<div style="display:inline-block;padding:6px 12px;background:#5b21b6;color:#fff;border-radius:12px;">$49</div>` },
    ],
  },
];
