import request from "../utils/http";
//获取轮播图的接口
export function getSwiper(number){
    const url =`/api/weChat/applet/course/banner/list?=number=${number}`;
    return request.get(url).then(res=>{
        return {
            ...res,
            list:res.data
        }
    })
}
//获取免费课程、精品课程等接口
export  function  getCourseTypeList(type,pageNum,pageSize) {
        const url =`/api/weChat/applet/course/list/type?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}`;
        return request.post(url).then(res=>{
            return{
                ...res,
            }
        })
}
//头条精选
export  function  getTitleCourseList(pageNum,pageSize) {
    return request.post(`/api/weChat/applet/article/list?pageNum=${pageNum}&pageSize=${pageSize}`,{})
}
//底部友情的链接
export  function  getFooterList(dictType,pageNum,pageSize,orderByColumn,isAsc) {
    const url =`/api/system/dict/data/list/open?dictType=${dictType}&pageNum=${pageNum}&pageSize=${pageSize}&orderByColumn=${orderByColumn}&isAsc=${isAsc}`;
    return request.post(url).then(res=>{
        return{
            ...res,
            list:res.rows
        }
    })
}

//直播
export function streaming() {
    const url=`/api/pc/liveCourseInfo/list`;
    return request.post(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}
//查看课程详情(进入缓冲页)
export function getCourseDetail(courseId){
    const url =`/api/pc/course/detail/${courseId}`;
    return request.get(url).then(res=>{
        return {
            ...res,
        }
    })
}
//获取课程评论的接口
export function getCourseComment(courseId){
    const url =`/api/pc/comment/commentList/course/${courseId}`;
    return request.get(url).then(res=>{
        return {
            ...res,
        }
    })
}

//播放界面切换章节的接口
export function switchChapters(sectionId){
    const url =`/api/weChat/applet/course/switch/section/${sectionId}`;
    return request.get(url).then(res=>{
        return {
            ...res,
        }
    })
}
