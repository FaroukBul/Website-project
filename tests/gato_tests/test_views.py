from . import GatoTest
from flask import url_for, request
from Website.models.gato import Position


class TestGatoViews(GatoTest):

    def test_should_return_valid_response(self):
        response = self.client.get(
            url_for('home.gato')
        )

        self.assert200(response)