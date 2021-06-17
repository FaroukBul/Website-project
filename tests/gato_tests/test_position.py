from . import GatoTest
from Website.models.gato import Position


class TestSavePosition(GatoTest):

    def test_should_save_index_of_position_represented_by_number(self):
        position_o = Position(
            player="O",
            position=1
        )
        position_o.add()

        self.assertIn(position_o, self.db.session)
