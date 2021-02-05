const FindId = (id,list)=>{
    var temp=-1;
    if(list){
        list.forEach((item,stt)=>{
            if(item.id==id){
                temp=stt;
            }
        })
    }
    return temp;
}
export default FindId;