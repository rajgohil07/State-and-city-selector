import { useState } from "react";
import { State } from "../State/State";

const ParentComponent = () => {
	const [state, setState] = useState([
		{
			name: 'Gujarat',
			id: 1,
			link: 'https://en.wikipedia.org/wiki/Gujarat',
			city: [
				{
					id: 1,
					name: 'Jamnagar'
				},
				{
					id: 2,
					name: 'Ahmedabad'
				},
				{
					id: 3,
					name: 'Bhavnagar'
				}]
		},
		{
			name: 'Maharashtra',
			id: 2,
			link: 'https://en.wikipedia.org/wiki/Mumbai',
			city: [{
				id: 1,
				name: 'Mumbai'
			},
			{
				id: 2,
				name: 'Pune'
			},
			{
				id: 3,
				name: 'Nagpur'
			}]
		},
		{
			name: 'Goa',
			id: 3,
			link: 'https://en.wikipedia.org/wiki/Goa',
			city: [{
				id: 1,
				name: 'Panaji'
			},
			{
				id: 2,
				name: 'Vasco-Mormugao'
			},
			{
				id: 3,
				name: 'Ponda'
			}]
		}
	])

	const [editModeData, updateEditModeData] = useState({
		stateId: null,
		cityId: null,
		isEditable: false
	});

	const [addModeData, updateAddModeData] = useState({
		stateId: null,
		isAdding: false
	});

	const removeCity = (stateId, cityId) => {
		const clonedStateData = [...state]
		clonedStateData.forEach((s, si) => {
			if (s.id === stateId) {
				s.city.forEach((c, ci) => {
					if (c.id === cityId) {
						delete clonedStateData[si].city[ci];
					}
				})
			}
		})
		setState(clonedStateData)
	}

	const editCity = (stateId, cityId, newName) => {
		const clonedStateData = [...state]
		clonedStateData.forEach((s, si) => {
			if (s.id === stateId) {
				s.city.forEach((c, ci) => {
					if (c.id === cityId) {
						clonedStateData[si].city[ci].name = newName;
					}
				})
			}
		})
		setState(clonedStateData);
		updateEditModeData({
			stateId,
			cityId,
			isEditable: false
		})
	}

	const addNewCityToState = (stateId, newCityName) => {
		const clonedStateData = [...state]
		clonedStateData.forEach((s, si) => {
			if (s.id === stateId) {
				clonedStateData[si].city.push({ id: new Date().getTime(), name: newCityName })
			}
		});
		setState(clonedStateData); updateAddModeData({
			stateId: stateId,
			isAdding: false
		});
	}

	return (
		<>
			<div style={{ paddingTop: '11px' }}>
				<div
					style={{
						textAlign: "center",
						border: "1px black solid",
						borderRadius: "30px",
						margin: "auto 20px"
					}}
				>
					<h1>This is my first react app!</h1>
				</div>
				{state.map(data =>
					<State
						stateData={data}
						key={data.id}
						removeCity={removeCity}
						editModeData={editModeData}
						updateEditModeData={updateEditModeData}
						editCity={editCity}
						updateAddModeData={updateAddModeData}
						addModeData={addModeData}
						addNewCityToState={addNewCityToState}
					/>)}
			</div>
		</>
	);
};

export { ParentComponent };
