// Story.jsx

import React, { useState } from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
    let [selfish, setSelfish] = useState(false);
	let [ending, setEnding] = useState("");
	let scenarios = [
		{
			id: 0,
			text: 'You approach a massive gate guarded by a stern-looking doorkeeper. He fixes you with a piercing gaze as you near. "Why do you wish to pass through this door?" he asks.',
			choices: [
				{ text: 'I seek to find God and reach heaven.', nextScenario: 1 },
				{ text: 'I am here to pursue my dreams and find my destiny.', nextScenario: 2 },
                { text: 'I wish to discuss and change the law.', nextScenario: 3}
			]
		},
		{
			id: 1,
			text: 'Many have sought what lies beyond, driven by faith. What makes you worthy?',
			choices: [
				{ text: "I just want to go to heaven, is that too much to ask?", nextScenario: 11 },
				{ text: 'I have maintained my faith even in the face of adversity, and have helped others in my path.', nextScenario: 4 }
			]
		},
		{
			id: 2,
			text: 'Dreams are but shadows. What dream drives you so fervently?',
			choices: [
				{ text: "I want to make money for myself.", nextScenario: 11 },
				{ text: 'I dream of a world where I can be free to create, explore, and improve the world.', nextScenario: 4 }
			]
		},
		{
			id: 3,
			text: 'The law is vast and intricate. What do you seek within its confines?',
			choices: [
				{ text: 'I want to morph the law to benefit myself.', nextScenario: 11 },
				{ text: 'I seek justice for myself and others.', nextScenario: 4 }
			]
		},
		{
			id: 4,
			text: 'As years pass, you ponder your long vigil and the unchanging stance of the doorkeeper. What is your next course of action?',
			choices: [
				{ text: 'I will try to bribe the doorkeeper with my most valuable possessions.', nextScenario: 5 },
				{ text: 'I will wait patiently, continuing to learn from my observations.', nextScenario: 6 },
                { text: 'I will confront the doorkeeper, demanding answers.', nextScenario: 7 }
			]
		},
		{
			id: 5,
			text: 'The doorkeeper accepts your offerings with indifference. "These have no value here," he states solemnly. You begin to doubt, your hope flickering like a dying flame.',
			choices: [
				{ text: 'Continue...', nextScenario: 8 }
			]
		},
		{
			id: 6,
			text: 'Decades drift by. Your resolve hardens as the door remains closed. You begin to doubt, your hope flickering like a dying flame.',
			choices: [
				{ text: 'Continue...', nextScenario: 8 }
			]
		},
		{
			id: 7,
			text: 'The doorkeeper towers over you, his expression unreadable. "Why persist when the path seems so impenetrable?"',
			choices: [
				{ text: 'Perhaps it is time to seek other paths, other doors.', nextScenario: 8 },
				{ text: 'Because to stop now would mean all has been in vain.', nextScenario: 9  }
			]
		},
        {
			id: 8,
			text: "Your life's end approaches. You gather your strength to ask one final question.",
			choices: [
				{ text: 'Why, after all these years, have I been the only one seeking entry?', nextScenario: 12 },
			]
		},
        {
			id: 9,
			text: 'The doorkeeper chuckles. “I see. You are quite determined, however your motives are selfish. Right now is not the time.” Your stomach fills with dread, and you wish you responded differently earlier.',
			choices: [
				{ text: 'Continue...', nextScenario: 8 },
			]
		},
        {
			id: 10,
			text: 'The doorkeeper hums. He seems impressed by your resolve and determination. “I see. You have been quite persistent for some time now. Perhaps you do deserve to see what lies behind these confines, weary traveller.',
			choices: [
				{ text: 'Continue...', nextScenario: 13 },
			]
		},
        {
			id: 11,
			text: 'As years pass, you ponder your long vigil and the unchanging stance of the doorkeeper. What is your next course of action?',
			choices: [
				{ text: 'I will try to bribe the doorkeeper with my most valuable possessions.', nextScenario: 5 },
				{ text: 'I will wait patiently, continuing to learn from my observations.', nextScenario: 6 },
                { text: 'I will confront the doorkeeper, demanding answers.', nextScenario: 7 }
			]
		},
        {
			id: 12,
			text: 'The doorkeeper reveals, "This gate was meant only for you, and now I must close it forever."',
			choices: [
				{ text: 'Finish Game', nextScenario: 17 }
			]
		},
		{
			id: 13,
			text: "After countless years of waiting and proving your devotion, the doorkeeper steps aside and slowly opens the gate. As light floods through, you're enveloped by a serene, celestial glow. There, before you, lies a vast expanse that transcends earthly understanding, filled with peace and divine presence. 'Your faith has guided you to what you seek,' the doorkeeper announces as you step through into the realm of the divine.",
			choices: [
				{ text: 'Finish Game', nextScenario: 16 }
			]
		},
		{
			id: 14,
			text: "With determination and creativity fueling your long wait, the doorkeeper nods in respect and pulls open the gate. Beyond lies a landscape crafted from the fabric of your deepest aspirations—a world where every horizon promises adventure and the air buzzes with the energy of endless possibility. 'Your dreams shape this world,' the doorkeeper declares. As you step forward, each step shapes the world around you, crafting the perfect reality of your own imagination.",
			choices: [
				{ text: 'Finish Game', nextScenario: 16 }
			]
		},
		{
			id: 15,
			text: "After years of intellectual curiosity and robust debate with the doorkeeper, he finally acknowledges your profound understanding. As he swings the gate wide open, you're surprised by a bustling council chamber filled with the greatest policymakers of the age. 'Here lies the nexus of law and society, where rules are shaped and destinies forged,' he announces. As you step into the chamber, a prominent policymaker approaches, welcoming you to join them in shaping the laws that govern the world.",
			choices: [
				{ text: 'Finish Game', nextScenario: 16 }
			]
		}, 
		{
			id: 16,
			choices: []
		}, 
		{
			id: 17,
			choices: []
		}, 
	];

	const currentScenario = scenarios.find(s => s.id === scenario);

	let handleChoice = (choice) => {
		let nextScenario = choice.nextScenario;

		if (nextScenario === 1) {
			setEnding("religion");
		}
		if (nextScenario === 2) {
			setEnding("dreams");
		}
		if (nextScenario === 3) {
			setEnding("law");
		}
		if (nextScenario === 11) {
			setSelfish(true);
		}
		if (nextScenario === 9) {
			nextScenario = selfish ? 9 : 10;
		}
		if (nextScenario === 13) {
			if (ending === "religion") {
				nextScenario = 13;
			} else if (ending === "dreams") {
				nextScenario = 14;
			} else if (ending === "law") {
				nextScenario = 15;
			}
		}

		if (nextScenario === 17) {
			onGameResult('lose');
		} else if (nextScenario === 16) {
			onGameResult('win');
		} 

		onChoice({ ...choice, nextScenario }); // Pass the potentially modified nextScenario
		};

	return (
		<div className="">
			<div className="flex flex-col">
				<p className="animate-slideLeft font-['VT323'] leading-none bg-[#48423a] text-white text-[1.7rem] rounded-lg border-4 border-[#a8a29e] p-3 mb-3">{currentScenario.text}</p>
				<ul className="text-black font-['VT323'] flex flex-col gap-3">
					{currentScenario.choices.map((choice, index) => (
						<li key={index} className="animate-slideRight">
							<button className="w-1/2 bg-[#d6d3d1] leading-none rounded-md p-2 text-2xl" onClick={() => handleChoice(choice)}>
							{choice.text}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Story;
