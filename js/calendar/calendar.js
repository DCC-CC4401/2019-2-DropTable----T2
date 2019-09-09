	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2019-09-09',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Crear prototipos',
					start: '2019-09-09T10:30:00',
					end: '2019-09-09T17:30:00'
				},
				{
					title: 'Presentaciones CC4401',
					start: '2019-09-10T18:00:00',
					end: '2019-09-10T19:30:00'
				},
				{
					title: 'Jugar Pokemon',
					start: '2019-09-12T10:30:00',
					end: '2019-09-12T12:30:00'
				},
				{
					title: 'Ir al cine',
					start: '2019-09-12T19:00:00'
				},
			]
		});
		
	});
