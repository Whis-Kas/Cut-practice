let app=new Vue({
  el:"#app",
 data(){
  return{
          today:{
              year:0,
              month:0,
              day:0,
              date:0,
          },
          calendar:{
            year:0,
            month:0,
            day:0,
            date:0,
          }
  }
 },methods:{
     getdate(){
        const date=new Date();
        this.today.year=this.calendar.year=date.getFullYear();
        this.today.month=this.calendar.month=date.getMonth();
        this.today.day=this.calendar.day=date.getDay();
        this.today.date=this.calendar.date=date.getDate();
     },
     setyear(num){
       this.calendar.year+=num;
     },
     setmonth(num){
         let month=this.calendar.month+num;
         if(month>11)
         {
             this.calendar.month=0;
             this.calendar.year+=1;
         }
         else if(month<0)
         {
            this.calendar.month=11;
            this.calendar.year-=1;
         }
         else{
            this.calendar.month=month;
         }
     },
     checktoday(data){
       return this.today.year==data.year&&this.today.month==data.month&&this.today.date==data.date;
     },
     checkother(data){
        return this.calendar.month!=data.month;
      },checkweekend(data){
        return data.day==0||data.day==6;
      }
    
    
    
 },computed:{
     calendarfirstDay(){
       let today=new Date(this.calendar.year,this.calendar.month,this.calendar.date).getDay();
       let monthfirst=new Date(this.calendar.year,this.calendar.month,this.calendar.date-today);
       let date={
        year:monthfirst.getFullYear(),
        month:monthfirst.getMonth(),
        day:monthfirst.getDay(),
        date:monthfirst.getDate(),

       }
       return date;
     },
     calendarDay(){
         let data=[];
         for(var i=0;i<42;i++)
         {
             let date=new Date(this.calendarfirstDay.year,this.calendarfirstDay.month,this.calendarfirstDay.date+i);
             data.push({
                year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDay(),
                date:date.getDate(),     
               });
         }
         return data;
     }

    
    
    
 },mounted(){
    this.getdate();
 }

});