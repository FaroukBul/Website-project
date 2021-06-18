from . import GatoTest
from Website.models.gato import Position


class SavePositionTest(GatoTest):

    def test_should_save_index_of_position_represented_by_number(self):
        position_o = Position(
            player="o",
            position=1
        )
        position_o.add()

        self.assertIn(position_o, self.db.session)


class GetAllPositionsTest(GatoTest):
    
    def test_should_return_all_positions_of_player_o_given_player(self):
        second_position_o = Position(
            player="o",
            position=2
        )
        second_position_o.add()
        positions = Position.get_all_of_player("o")

        self.assertEqual(positions, [1, 2])


class DeleteTest(GatoTest):

    def test_should_delete_all_positions(self):
        Position.delete_all()
 
        self.assertNotIn(self.test_position_o, self.db.session)