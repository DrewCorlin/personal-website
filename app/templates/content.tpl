<div class="js-content-text content-text js-content"></div>
<div class="js-education js-content education">
	<p class="tufts">Tufts University Class of 2019</p>
	<p class="major-minor">Bachelors of Science in Computer Science</p>
	<p class="major-minor">Minor in Entrepreneurial Leadership Studies</p>
	<p class="courses">Courses</p>
	<ul class="course-list">
		<% _.each(courses, function(course){ %>
			<li class="course-list-element"><%-course%></li>
		<% }); %>
	</ul>
</div>
