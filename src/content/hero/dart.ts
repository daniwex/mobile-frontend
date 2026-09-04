export const dartCode = `
class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Text('Mobile Challenge'),
        ElevatedButton(
          onPressed: () {},
          child: const Text('Get Started'),
        ),
      ],
    );
  }
}
`