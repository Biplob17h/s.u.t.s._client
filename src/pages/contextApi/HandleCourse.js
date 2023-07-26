export const handleCourseInOrder = (order) => {
  let orderCourse = [];
  order.forEach((element) => {
    orderCourse.push(element.course);
  });
  return orderCourse;
};
