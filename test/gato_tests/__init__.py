from test import Test
from Website.models.gato import Position


class GatoTest(Test):

    def setUp(self):
        Test.setUp(self)
        self.test_position_o = Position(
            player="o",
            position=1
        )
        self.test_position_o.add()