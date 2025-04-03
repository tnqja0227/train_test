import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Picker, TextInput, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.paragraph}>
					Select your team and options below to battle in a real-time simulation against a CPU opponent.
				</Text>
				<Text style={styles.paragraph}>
					This tool is a training and learning resource intended to supplement your in-game battles. Experiment with new lineups or practice in a pressure-free environment against a difficulty of your choice!
				</Text>
				<Text style={styles.paragraph}>
					Check out <Text style={styles.link}>Training Analysis</Text> for rankings and data recorded from these Training Battles.
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.heading}>Your Team</Text>
				{/* Include the Pokemultiselect module */}
				<TouchableOpacity style={styles.randomButton}>
					<Text style={styles.randomButtonText}>Random</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.section}>
				<Text style={styles.heading}>Settings</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Single (3v3)" value="single" />
					<Picker.Item label="Tournament (6v6)" value="tournament" />
				</Picker>
				<Text style={styles.subHeading}>League & Cup</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Select a league" value="" />
					<Picker.Item label="GO Battle League (Great)" value="1500 gobattleleague" />
					<Picker.Item label="GO Battle League (Ultra)" value="2500 gobattleleague" />
					<Picker.Item label="GO Battle League (Master)" value="10000 gobattleleague" />
					<Picker.Item label="Great League" value="1500 all" />
					<Picker.Item label="Ultra League" value="2500 all" />
					<Picker.Item label="Master League" value="10000 all" />
				</Picker>
				<Text style={styles.subHeading}>Difficulty</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Novice" value="0" />
					<Picker.Item label="Rival" value="1" />
					<Picker.Item label="Elite" value="2" />
					<Picker.Item label="Champion" value="3" />
				</Picker>
				<Text style={styles.subHeading}>Team Selection</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Random" value="random" />
					<Picker.Item label="Manual" value="manual" />
					<Picker.Item label="Import" value="custom" />
				</Picker>
				{/* Include the Pokemultiselect module */}
				<View style={styles.customTeamSection}>
					<Text style={styles.subHeading}>Import Teams</Text>
					<Text style={styles.paragraph}>
						Select a custom team pool built in the <Text style={styles.link}>Training Team Editor</Text>, or paste a code from the editor or <Text style={styles.link}>GoBattleLog.com</Text>.
					</Text>
					<Picker style={styles.picker}>
						<Picker.Item label="Select a team pool" value="" />
					</Picker>
					<TextInput style={styles.textInput} placeholder="Paste team pool code" />
					<Text style={styles.validationText}>Looks good! Teams successfully imported.</Text>
				</View>
			</View>

			<View style={styles.section}>
				<TouchableOpacity style={styles.battleButton}>
					<Text style={styles.battleButtonText}>Train</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
	},
	section: {
		marginBottom: 24,
	},
	paragraph: {
		fontSize: 16,
		marginBottom: 8,
	},
	link: {
		color: 'blue',
		textDecorationLine: 'underline',
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 12,
	},
	subHeading: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 8,
	},
	picker: {
		height: 50,
		marginBottom: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 8,
		marginBottom: 8,
	},
	validationText: {
		color: 'green',
		marginBottom: 8,
	},
	randomButton: {
		backgroundColor: '#007bff',
		padding: 10,
		borderRadius: 4,
		alignItems: 'center',
	},
	randomButtonText: {
		color: '#fff',
		fontSize: 16,
	},
	battleButton: {
		backgroundColor: '#28a745',
		padding: 16,
		borderRadius: 4,
		alignItems: 'center',
	},
	battleButtonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
