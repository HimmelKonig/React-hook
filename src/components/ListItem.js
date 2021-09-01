import React from "react";

const ListItem = ({student, add}) => {
	console.log('Rendering List Item Comp!');
	return (
		<div className='listItem' onClick = {()=> add(student)}>
			<img 
			src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
			alt="Khan"
			/>
			
			
		</div>
	)
}