export default {
   name: 'Status',
   html: `
      <h1>Status view!</h1>
      
       <p><strong>Character Name:</strong> Nathaniel</p>
       <p><strong>Class:</strong> Software Developer</p>
       
       <div class="character-stats">
         <div>
           <p><strong>Stats:</strong></p>
           <table>
             <tr>
               <th>Stat</th>
               <th>Value</th>
             </tr>
             <tr>
               <th>HP</th>
               <th>100</th>
             </tr>
             <tr>
               <th>MP</th>
               <th>100</th>
             </tr>
             <tr>
               <th>Str</th>
               <th>2</th>
             </tr>
             <tr>
               <th>Agi</th>
               <th>3</th>
             </tr>
             <tr>
               <th>Int</th>
               <th>9</th>
             </tr>
           </table>
         </div>
         
         <div>
           <p><strong>Skills:</strong></p>
           <table>
             <tr>
               <th>Skill</th>
               <th>Level</th>
             </tr>
             <tr>
               <th>Coding</th>
               <th>100</th>
             </tr>
             <tr>
               <th>Math</th>
               <th>85</th>
             </tr>
             <tr>
               <th>Typing</th>
               <th>100</th>
             </tr>
             <tr>
               <th>Melee</th>
               <th>12</th>
             </tr>
             <tr>
               <th>Defense</th>
               <th>15</th>
             </tr>
           </table>
         </div>
       </div>
   
       <div>
         <p><strong>Current location: </strong><span id="current-location">Backyard</span></p>
         <ol id="travel-locations">
            
         </ol>
       </div>
   `
}